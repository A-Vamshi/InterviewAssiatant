"use server";

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

export const signUp = async (params : SignUpParams) => {
    const { uid, name, email } = params;
    try {
        const userRecord = await db.collection("users").doc(uid).get();
        if (userRecord.exists) {
            return {
                success: false,
                message: "User already exists",
            }
        } 
        await db.collection("users").doc(uid).set({
            name, 
            email,
        })
        return {
            success: true,
            message: "You have successfully created an account, please sign in.",
        }
    } catch (error: any) {
        console.error("Error creating a user: ", error);
        if (error.code === "auth/email-already-exists") {
            return {
                success: false,
                message: "This email is already in use",
            }
        }
        return {
            success: false,
            message: "Failed to create an account",
        }
    }
}

export const signIn = async (params: SignInParams) => {
    const { email, idToken } = params;
    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord) {
            return {
                success: false,
                message: "User does not exist, create a new account",
            }
        }
        await setSessionCookie(idToken);
    } catch (error) {
        console.error("Error signing in a user ", error);

        return {
            success: false,
            message: "Failed to sign-in the user",
        }
    }
}

export const setSessionCookie = async (idToken: string) => {
    const cookieStore = await cookies();
    const ONE_WEEK = 60 * 60 * 24 * 7;
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
    })
    cookieStore.set("session", sessionCookie, {
        maxAge: ONE_WEEK * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax", 
    })
}

export const getCurrentUser = async (): Promise<User | null> => {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;
    if (!sessionCookie) {
        return null;
    }
    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        const userRecord = await db.collection("users").doc(decodedClaims.uid).get();
        if (!userRecord) {
            return null;
        }
        return {
            ...userRecord.data(),
            id: userRecord.id   
        } as User;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const isAuthenticated = async () => {
    const user = await getCurrentUser();
    return !!user;
}