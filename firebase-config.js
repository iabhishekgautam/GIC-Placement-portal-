// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQU8y_Q6DC1piNL_5RpV5nH9JVB-1D_w8",
  authDomain: "gic-placement-portal.firebaseapp.com",
  projectId: "gic-placement-portal",
  storageBucket: "gic-placement-portal.appspot.com",
  messagingSenderId: "273286737355",
  appId: "1:273286737355:web:c41b50b259e7517b411a4e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);