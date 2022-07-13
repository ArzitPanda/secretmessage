import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl_YdLbJKHC4YQYQHWAy9xZvPFSWczqy8",
  authDomain: "messageme-ac734.firebaseapp.com",
  projectId: "messageme-ac734",
  storageBucket: "messageme-ac734.appspot.com",
  messagingSenderId: "967123064527",
  appId: "1:967123064527:web:cc92abdef717002de109ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);