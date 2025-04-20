import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { robot } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Prepare for your interviews now using personalized AI assistant</h2>
          <p className='text-lg'>
            Practice for your interviews with advanced AI features tailored to your resume and job description
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Attend an interview</Link> 
          </Button>
        </div>
        <Image src={robot} alt="interviewer" width={400} height={400} className='max-sm:hidden' />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Start preparing</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
          {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>
    </>
  )
}

export default Home