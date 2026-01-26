// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);