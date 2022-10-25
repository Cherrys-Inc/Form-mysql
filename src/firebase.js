// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { FacebookAuthProvider, getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=new getAuth();
const provider= new GoogleAuthProvider()
const fprovider=new FacebookAuthProvider()
export {auth,provider,fprovider}
