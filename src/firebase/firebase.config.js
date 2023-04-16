// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyWEr4LxzlMtq246szdQaPYdNSicweRMw",
  authDomain: "auth-fire-context-tw.firebaseapp.com",
  projectId: "auth-fire-context-tw",
  storageBucket: "auth-fire-context-tw.appspot.com",
  messagingSenderId: "751485212831",
  appId: "1:751485212831:web:35978bb2622ae92dd66aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;