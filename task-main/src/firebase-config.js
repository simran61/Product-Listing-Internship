import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1DUM0Eb2jZdNTLJdVH7p6Qr_1WgITM_w",
  authDomain: "intern-task-94623.firebaseapp.com",
  projectId: "intern-task-94623",
  storageBucket: "intern-task-94623.appspot.com",
  messagingSenderId: "14328186133",
  appId: "1:14328186133:web:d350a1d0f74d1e1f76d51c",
  measurementId: "G-WPNZ6L4YY9"
};

const app = initializeApp(firebaseConfig);
// getDocs(userRef)
// .then((snapshot) => {
//   let
// })

export const auth = getAuth(app);
export const db = getFirestore();
