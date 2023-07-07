import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import "firebase/firestore";
import getStorage from "redux-persist/es/storage/getStorage";

const firebaseConfig = {
  apiKey: "AIzaSyAd3lnlOkKSO_m391fUeNq_7a5Fy4KksaM",
  authDomain: "react-native-project-bc9c7.firebaseapp.com",
  databaseURL: 'https://react-native-project-bc9c7.firebaseio.com',
  projectId: "react-native-project-bc9c7",
  storageBucket: "react-native-project-bc9c7.appspot.com",
  messagingSenderId: "600912305811",
  appId: "1:600912305811:web:88aedfa63e532657da7766",
  measurementId: "G-QWPP328MLS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getFirestore(app);
export const storage = getStorage(app);