import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCPpqrsWmhc9l5IsITOOyTOSYBV5ps3VWA",
  authDomain: "react-native-577cb.firebaseapp.com",
  databaseURL: "https://react-native-577cb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-577cb",
  storageBucket: "react-native-577cb.appspot.com",
  messagingSenderId: "59329769255",
  appId: "1:59329769255:web:e8e85677f6aff7fd118302"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);


