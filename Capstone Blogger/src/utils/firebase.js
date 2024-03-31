// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE,
//   authDomain: "blog-cddc2.firebaseapp.com",
//   projectId: "blog-cddc2",
//   storageBucket: "blog-cddc2.appspot.com",
//   messagingSenderId: "413696194974",
//   appId: "1:413696194974:web:bc0a551cd5558bdf0dbe8f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBnFg9DNGpJMafN8iQJhi5YSxLxj5cxNWE",
  authDomain: "fir-b0186.firebaseapp.com",
  projectId: "fir-b0186",
  storageBucket: "fir-b0186.appspot.com",
  messagingSenderId: "471232289910",
  appId: "1:471232289910:web:7fc5e37c0eb0eedd355357",
  measurementId: "G-FPXCRFP1EC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);