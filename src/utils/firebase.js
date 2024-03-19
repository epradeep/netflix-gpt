// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwlYcUF295GksJPTPP4M0nFR5rTZq3qiw",
  authDomain: "netflixgpt-59d6c.firebaseapp.com",
  projectId: "netflixgpt-59d6c",
  storageBucket: "netflixgpt-59d6c.appspot.com",
  messagingSenderId: "544587930745",
  appId: "1:544587930745:web:b1f381cf563127382408a8",
  measurementId: "G-7S9Z7DRKQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
