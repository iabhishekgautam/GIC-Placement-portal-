// script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQU8y_Q6DC1piNL_5RpV5nH9JVB-1D_w8",
  authDomain: "gic-placement-portal.firebaseapp.com",
  projectId: "gic-placement-portal",
  storageBucket: "gic-placement-portal.appspot.com",
  messagingSenderId: "273286737355",
  appId: "1:273286737355:web:c41b50b259e7517b411a4e",
  measurementId: "G-76KMQCZSX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redirect to dashboard on success
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
