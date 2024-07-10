// src/auth.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const register = async () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User registered successfully");
    } catch (error) {
        alert(error.message);
    }
};

const login = async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("User logged in successfully");
    } catch (error) {
        alert(error.message);
    }
};

window.register = register;
window.login = login;
