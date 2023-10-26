// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAX_KG5MBPVDWhYrPU__7EdMSVbj5frMFU",
  authDomain: "hledesma-d9503.firebaseapp.com",
  projectId: "hledesma-d9503",
  storageBucket: "hledesma-d9503.appspot.com",
  messagingSenderId: "789877810772",
  appId: "1:789877810772:web:32abe3f5010976c5826fc1",
  measurementId: "G-C8L9XQV91Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functionsApp = getFunctions(app);
export const auth = getAuth(app);