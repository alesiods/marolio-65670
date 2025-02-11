
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-65670.firebaseapp.com",
  projectId: "final-65670",
  storageBucket: "final-65670.firebasestorage.app",
  messagingSenderId: "1009625383245",
  appId: "1:1009625383245:web:e98298c3cc7c54ca30f704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)


