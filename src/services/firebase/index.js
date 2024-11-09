import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCUsmdGbriNdtsK7ZnDvsaZyuOLLHMyWk8",
  authDomain: "millionaire-game-4677b.firebaseapp.com",
  projectId: "millionaire-game-4677b",
  storageBucket: "millionaire-game-4677b.firebasestorage.app",
  messagingSenderId: "144227485385",
  appId: "1:144227485385:web:36d458b99d6571f8016f18",
  measurementId: "G-DP72EH9SPC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
}