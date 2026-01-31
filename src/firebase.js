// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJiaUEqeFEMSCs02CmPYvfLwGeMtDezA",
  authDomain: "ai-jd-generator.firebaseapp.com",
  projectId: "ai-jd-generator",
  storageBucket: "ai-jd-generator.firebasestorage.app",
  messagingSenderId: "295010952242",
  appId: "1:295010952242:web:3813f60624645a0f17082b",
  measurementId: "G-DGRDY1NYN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();