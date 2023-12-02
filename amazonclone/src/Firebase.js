// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_VKz7G7IYKwMTEZW5Z4Ztnedtib0n_YA",
  authDomain: "clone-316f2.firebaseapp.com",
  projectId: "clone-316f2",
  storageBucket: "clone-316f2.appspot.com",
  messagingSenderId: "877555190129",
  appId: "1:877555190129:web:10cbf2f5702544b9c58ed0",
  measurementId: "G-28MKHD88R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.db;
const analytics = getAnalytics(app);  
const auth = getAuth(app);

export {db, auth};