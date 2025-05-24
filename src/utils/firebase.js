import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALEI6Ru6f3HJB4GpNacLzjx9ESmrCh3Oc",
  authDomain: "cab-booking-a0f56.firebaseapp.com",
  projectId: "cab-booking-a0f56",
  storageBucket: "cab-booking-a0f56.firebasestorage.app",
  messagingSenderId: "1007100622887",
  appId: "1:1007100622887:web:333981be2a0db0c6a7f602",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };





