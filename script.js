
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA3EB9sHjtWcde4JSVRRyfsZRa5oO353U",
  authDomain: "flipdeck-4449b.firebaseapp.com",
  projectId: "flipdeck-4449b",
  storageBucket: "flipdeck-4449b.firebasestorage.app",
  messagingSenderId: "805303515948",
  appId: "1:805303515948:web:a9d72d4cdd70924cb60a89",
  measurementId: "G-H7B9WC9TD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);