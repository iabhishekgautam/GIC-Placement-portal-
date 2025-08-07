import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { auth } from "./firebase-config.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // ✅ Redirect after successful login
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
