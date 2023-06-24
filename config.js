import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAd3lnlOkKSO_m391fUeNq_7a5Fy4KksaM",
  authDomain: "react-native-project-bc9c7.firebaseapp.com",
  projectId: "react-native-project-bc9c7",
  storageBucket: "react-native-project-bc9c7.appspot.com",
  messagingSenderId: "600912305811",
  appId: "1:600912305811:web:88aedfa63e532657da7766",
  measurementId: "G-QWPP328MLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const database = getDatabase(app);