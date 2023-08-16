import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eF8ZiWzoegXF3ymvTAGZIej5ocE-a3g",
  authDomain: "house-marketplace-app-1fb0c.firebaseapp.com",
  projectId: "house-marketplace-app-1fb0c",
  storageBucket: "house-marketplace-app-1fb0c.appspot.com",
  messagingSenderId: "90340015102",
  appId: "1:90340015102:web:b0a55694c24a9f37095eaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()