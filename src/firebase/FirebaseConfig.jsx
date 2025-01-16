// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyALwFY2O6JioeYjiMUedwnyf76_6FSIt8o",
  authDomain: "metrostay-84734.firebaseapp.com",
  projectId: "metrostay-84734",
  storageBucket: "metrostay-84734.firebasestorage.app",
  messagingSenderId: "250594853995",
  appId: "1:250594853995:web:72ac9a667f417339239d2e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
