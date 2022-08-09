type = "module"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7qPLtARRztROmcNMBWJ4J92wyfAn0yRg",
  authDomain: "curriculowendellsaboia.firebaseapp.com",
  projectId: "curriculowendellsaboia",
  storageBucket: "curriculowendellsaboia.appspot.com",
  messagingSenderId: "873279501371",
  appId: "1:873279501371:web:66a72a9047cd5571cdd81e",
  measurementId: "G-VR03XPXKE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-VR03XPXKE5');
