// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaDyZsnSH5lyQT4GBbLIKssqEzGzqU4Ps",
  authDomain: "fitness-club-registration.firebaseapp.com",
  projectId: "fitness-club-registration",
  storageBucket: "fitness-club-registration.appspot.com",
  messagingSenderId: "582375451215",
  appId: "1:582375451215:web:cecc057bb75d27003d583a",
  measurementId: "G-CJ47L4778S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);