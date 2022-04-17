// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOTX-dTmcCnyyPf7tQ5yUXdaR6FWJqpIk",
  authDomain: "proyectocompustore.firebaseapp.com",
  projectId: "proyectocompustore",
  storageBucket: "proyectocompustore.appspot.com",
  messagingSenderId: "601197677065",
  appId: "1:601197677065:web:a2828b8b320a09d69dc6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)