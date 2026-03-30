import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBU50HJrekgHWwwyLq5CTRwhjHkGJAAAfs",
    authDomain: "classroom-management-82382.firebaseapp.com",
    projectId: "classroom-management-82382",
    storageBucket: "classroom-management-82382.firebasestorage.app",
    messagingSenderId: "146641865620",
    appId: "1:146641865620:web:ce693b7b064afd5d1bdd81",
    measurementId: "G-PX867PB723"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const PTEC_APP_ID = "ptec-app";

// Re-export needed functions so main app file only imports from here
export { onAuthStateChanged, signInAnonymously, doc, getDoc, collection, getDocs };