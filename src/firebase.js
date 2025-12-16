import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyf10JZbKxjruxFUHxn_s9y74p-C7suTQ",
  authDomain: "my-college-chatbot-480ad.firebaseapp.com",
  projectId: "my-college-chatbot-480ad",
  storageBucket: "my-college-chatbot-480ad.firebasestorage.app",
  messagingSenderId: "68130275424",
  appId: "1:68130275424:web:6c4432cd4b3da39b2a8305",
  measurementId: "G-WLBYPDP73P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export services
export const db = getFirestore(app);
export const auth = getAuth(app);
