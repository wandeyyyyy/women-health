// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "women-blog-2919a.firebaseapp.com",
  projectId: "women-blog-2919a",
  storageBucket: "women-blog-2919a.appspot.com",
  messagingSenderId: "694320383148",
  appId: "1:694320383148:web:61669e3e6b28d7bc2ecb09",
  measurementId: "G-NB9P2Y8TK5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);