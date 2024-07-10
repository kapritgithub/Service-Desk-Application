// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwu-LR5guwlQPefSLckK0A-Qeir5pTdFg",
  authDomain: "service-desk-application-25b99.firebaseapp.com",
  projectId: "service-desk-application-25b99",
  storageBucket: "service-desk-application-25b99.appspot.com",
  messagingSenderId: "988953520021",
  appId: "1:988953520021:web:b92aaf183c95127f08b89c",
  measurementId: "G-E7S2R14QCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
