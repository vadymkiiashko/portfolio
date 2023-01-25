import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPYRrLl4-Mm5bj2NmkfB3NXWVdAk90cts",
  authDomain: "vadymkiiashko.firebaseapp.com",
  projectId: "vadymkiiashko",
  storageBucket: "vadymkiiashko.appspot.com",
  messagingSenderId: "610818316206",
  appId: "1:610818316206:web:42606f95f0c0fbcccd9a3f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

function myCreateUserWithEmailAndPassword({email, password}){

  console.log(password)
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
  }
    const mySignInWithEmailAndPassword = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
const mySignOut = (auth) =>
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });

export {
  myCreateUserWithEmailAndPassword,
  mySignInWithEmailAndPassword,
  mySignOut,
  auth,
};
