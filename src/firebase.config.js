

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWlZ3EdYtmBFxQtDLEOUtp0aXdJ8v57E",
  authDomain: "trendio-ac72d.firebaseapp.com",
  projectId: "trendio-ac72d",
  storageBucket: "trendio-ac72d.appspot.com",
  messagingSenderId: "724655627145",
  appId: "1:724655627145:web:5cd7795136b4a41acc5f58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage =getStorage(app);


export default app;