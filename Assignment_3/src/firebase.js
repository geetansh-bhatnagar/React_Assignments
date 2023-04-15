// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwCnCcunmbmIkJ8NRSIb4lkVvIaMWDq7M",
    authDomain: "login-with-firebase-data-267cf.firebaseapp.com",
    projectId: "login-with-firebase-data-267cf",
    storageBucket: "login-with-firebase-data-267cf.appspot.com",
    messagingSenderId: "197588428651",
    appId: "1:197588428651:web:48692c33a3ebdfaee24e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);