// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAgaWfkxHV1NfEHgGlBncnwRwAqGpJLpiA",
  authDomain: "interviewassistant-01.firebaseapp.com",
  projectId: "interviewassistant-01",
  storageBucket: "interviewassistant-01.firebasestorage.app",
  messagingSenderId: "404004580958",
  appId: "1:404004580958:web:667337b7af821bca810ecf",
  measurementId: "G-3BPKZLHWBD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)