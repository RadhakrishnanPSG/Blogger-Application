import { initializeApp } from "firebase/app";

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