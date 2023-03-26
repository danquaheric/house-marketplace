// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLlNhCc83diFojQ72mjDkRw2tc44hBVMo",
  authDomain: "house-marketplace-app-98e2e.firebaseapp.com",
  projectId: "house-marketplace-app-98e2e",
  storageBucket: "house-marketplace-app-98e2e.appspot.com",
  messagingSenderId: "964751139519",
  appId: "1:964751139519:web:4af34194dca89a48f79c0a",
  measurementId: "G-MV5RQFQPLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()