// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvcajGDHgxY-GV2sDKdoCoLtvKiwN6wk",
  authDomain: "coder-next-app-2a459.firebaseapp.com",
  projectId: "coder-next-app-2a459",
  storageBucket: "coder-next-app-2a459.appspot.com",
  messagingSenderId: "1007286743076",
  appId: "1:1007286743076:web:e532e4735a63138fe128b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()