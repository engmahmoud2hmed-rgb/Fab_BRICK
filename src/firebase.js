// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtvKyh73jTZVMoJM2SrAtn1_Lrfxz8xk4",
  authDomain: "fabric-54c31.firebaseapp.com",
  projectId: "fabric-54c31",
  storageBucket: "fabric-54c31.firebasestorage.app",
  messagingSenderId: "898185792252",
  appId: "1:898185792252:web:8554754799c6de10156579",
  measurementId: "G-13L2WYT8D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
