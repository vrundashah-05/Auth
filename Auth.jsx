import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from "firebase/auth";
import { auth } from "../Firebase";




export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email Signup
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Signup success:", res.user);
      })
      .catch((err) => alert(err.message));
  };

  // Email Login
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Login success:", res.user);
      })
      .catch((err) => alert(err.message));
  };

  // Google Login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log("Google login:", res.user);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>

      <hr />

      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
}