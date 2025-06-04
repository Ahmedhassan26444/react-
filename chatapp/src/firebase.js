// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJKNiu1UWHv58SzN-NdH8cV-Qq-qc40jM",
  authDomain: "ahmad-hassan-chat-app.firebaseapp.com",
  projectId: "ahmad-hassan-chat-app",
  storageBucket: "ahmad-hassan-chat-app.firebasestorage.app",
  messagingSenderId: "303739588223",
  appId: "1:303739588223:web:5cf54b69c594e04152794a",
  measurementId: "G-904FL3NWP2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);