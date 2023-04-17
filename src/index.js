import React from 'react';
import {createRoot}  from'react-dom/client';
import {App} from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCufcXp_MNjdmJr9XuZGvHw45pYHj9ey9c",
  authDomain: "coderhouse-react-d25b0.firebaseapp.com",
  projectId: "coderhouse-react-d25b0",
  storageBucket: "coderhouse-react-d25b0.appspot.com",
  messagingSenderId: "693875964540",
  appId: "1:693875964540:web:edcca38569a125f9d2a7f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(<App />);