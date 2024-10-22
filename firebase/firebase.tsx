// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {

  initializeAuth,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaHqWKM0jhrvDyy6oEZMaKliBUvWeuwtg",
  authDomain: "react-native-authenication.firebaseapp.com",
  projectId: "react-native-authenication",
  storageBucket: "react-native-authenication.appspot.com",
  messagingSenderId: "70466785431",
  appId: "1:70466785431:web:dd54de4fd409380af6d9d2",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
