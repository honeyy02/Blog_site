import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfbTknPnvuNMen90Twes_vT1i10Kv8Zz8",
    authDomain: "blogs-site-55522.firebaseapp.com",
    projectId: "blogs-site-55522",
    storageBucket: "blogs-site-55522.appspot.com",
    messagingSenderId: "771421733638",
    appId: "1:771421733638:web:fee025b18776fbeedd1487"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();