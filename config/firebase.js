import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyJtqKbB9gYdGi2fwqtljELcn2MeKVTr0",
    authDomain: "easyforyou-f19b0.firebaseapp.com",
    projectId: "easyforyou-f19b0",
    storageBucket: "easyforyou-f19b0.appspot.com",
    messagingSenderId: "1069580472255",
    appId: "1:1069580472255:web:e299a5e4f1599d3154db0a",
    measurementId: "G-17TP5SP3RG"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)