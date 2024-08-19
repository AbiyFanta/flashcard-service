// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHfPCeJe6D6504tY463d5A8v2rXQigAtg",
  authDomain: "flashcardservice-86d93.firebaseapp.com",
  projectId: "flashcardservice-86d93",
  storageBucket: "flashcardservice-86d93.appspot.com",
  messagingSenderId: "807828021639",
  appId: "1:807828021639:web:89f57fa969f8e955efb322",
  measurementId: "G-S97B91F61L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}