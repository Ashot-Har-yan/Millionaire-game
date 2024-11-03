import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-vjwRrkb6sG-3GMJ3jNCzQrpI_B4Pdxs",
  authDomain: "millionaire-game-5.firebaseapp.com",
  projectId: "millionaire-game-5",
  storageBucket: "millionaire-game-5.firebasestorage.app",
  messagingSenderId: "664123973752",
  appId: "1:664123973752:web:62cbde045fde852f878d8d",
  measurementId: "G-TC9WNB8SM7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
}