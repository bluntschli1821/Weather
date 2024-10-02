// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: Constants.manifest2.extra.apiKey,
    authDomain: Constants.manifest2.extra.authDomain,
    projectId: Constants.manifest2.extra.projectId,
    storageBucket: Constants.manifest2.extra.storageBucket,
    messagingSenderId: Constants.manifest2.extra.messagingSenderId,
    appId: Constants.manifest2.extra.appId,
    // measurementId: "G-7H8VPSSFML"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getFirestore();