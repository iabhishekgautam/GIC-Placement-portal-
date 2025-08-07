import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Signup Failed: " + error.message);
    });
}

window.signup = signup;