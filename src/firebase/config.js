// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {  getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjV9LSYaIz6aOBaqOD8vh1lW5l6nQ7jGM",
  authDomain: "journal-app-82205.firebaseapp.com",
  projectId: "journal-app-82205",
  storageBucket: "journal-app-82205.appspot.com",
  messagingSenderId: "908787721815",
  appId: "1:908787721815:web:e1cea6ab0e0b2efb962512"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth =getAuth(FirebaseApp) ;

export const FirebaseDB = getFirestore(FirebaseApp)