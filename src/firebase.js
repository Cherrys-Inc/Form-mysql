// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { FacebookAuthProvider, getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {firebaseConfig} from "./firebaseConfig.env"
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=new getAuth();
const provider= new GoogleAuthProvider()
const fprovider=new FacebookAuthProvider()
export {auth,provider,fprovider}
