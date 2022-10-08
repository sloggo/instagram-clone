// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhMph6Xw1y-X3gyx_CLMdwd1WTKRo7EGE",
  authDomain: "instasham-e74eb.firebaseapp.com",
  projectId: "instasham-e74eb",
  storageBucket: "instasham-e74eb.appspot.com",
  messagingSenderId: "367909324378",
  appId: "1:367909324378:web:0a5301a7af0f089332fa63",
  measurementId: "G-TVHMQT2PWJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export {firebaseApp, analytics, auth, db}
