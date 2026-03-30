// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU50HJrekgHWwwyLq5CTRwhjHkGJAAAfs",
  authDomain: "classroom-management-82382.firebaseapp.com",
  projectId: "classroom-management-82382",
  storageBucket: "classroom-management-82382.firebasestorage.app",
  messagingSenderId: "146641865620",
  appId: "1:146641865620:web:ce693b7b064afd5d1bdd81",
  measurementId: "G-PX867PB723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };