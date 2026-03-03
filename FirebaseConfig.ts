// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzpvagZnXuB1aN5qetGn1f5liixG0QJlk",
  authDomain: "sana-magka-grades-naa.firebaseapp.com",
  projectId: "sana-magka-grades-naa",
  storageBucket: "sana-magka-grades-naa.firebasestorage.app",
  messagingSenderId: "845683072405",
  appId: "1:845683072405:web:71920292c70e769fbd2a9c",
  measurementId: "G-7XG2WY2PV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);