"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from 'next/image'
import { logo } from "../public/index";
import Link from 'next/link'
import { toast } from 'sonner'
import FormFieldCustom from './FormField'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { signIn, signUp } from '@/lib/actions/auth.action'

const authFormSchema = (type : FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8)
  })
}

const AuthForm = ({ type } : { type : FormType}) => {
  const formSchema = authFormSchema(type);
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  })
 

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        const { name, email, password } = values;
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email: email, 
          password: password,
        });
        if (!result?.success) {
          toast.error(result?.message);
          return;
        }
        toast.success("Account created successfully, Please sign in")
        router.push("/sign-in")
      } else {
        const { email, password } = values;
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredentials.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in faliled");
        }
        await signIn({ email, idToken })
        toast.success("Sign in successfull")
        router.push("/")
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error : ${error}`)
    }
  }

  const isSignUp = type === "sign-up";

  return (
    <div className='card-border lg:min-w-[566px]'>
      <div className='flex flex-col gap-6 card py-14 px-10'>
        <div className='flex flex-row gap-2 justify-center'>
           <Image src={logo} alt="logo" height={32} width={38} /> 
           <h2 className='text-primary-100'> Interview Assistant</h2>
        </div>
        <h3>Your personal AI assistant to help you get job-ready!</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {isSignUp ? (
                <FormFieldCustom 
                  control={ form.control} 
                  name="name" 
                  label="Name" 
                  placeholder='dan martin'
                /> 
              ) : (<></>)}
            <FormFieldCustom 
              control={ form.control} 
              name="email" 
              label="E-mail" 
              placeholder='example@gmail.com'
              type="email"
            /> 
            <FormFieldCustom 
              control={ form.control} 
              name="password" 
              label="Password" 
              placeholder='password'
              type="password"
            /> 
            <Button type="submit" className='btn'> {isSignUp ? "Create an Account" : "Sign in"} </Button>
          </form>
        </Form>
        <p className='text-center'> 
          {isSignUp? "Have an account already?" : "New here?"} 
          <Link href={isSignUp? "/sign-in" : "/sign-up"} className='font-bold text-user-primary ml-1'> { isSignUp? "Sign in" : "Sign up"}</Link>
        </p>
      </div>
    </div>
  )
} 

export default AuthForm