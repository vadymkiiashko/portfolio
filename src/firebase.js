import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./app/features/projectSlice";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPYRrLl4-Mm5bj2NmkfB3NXWVdAk90cts",
  authDomain: "vadymkiiashko.firebaseapp.com",
  projectId: "vadymkiiashko",
  storageBucket: "vadymkiiashko.appspot.com",
  messagingSenderId: "610818316206",
  appId: "1:610818316206:web:42606f95f0c0fbcccd9a3f",
};

// google authentication
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});
//
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const myCreateUserWithEmailAndPassword = async ({ email, password }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
const mySignInWithEmailAndPassword = async ({ email, password }) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredentials;
};
//google sign in
const mySignInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, provider);
  return user;
};

const mySignOut = () =>
  signOut(auth)
    .then(() => {
      return { status: true };
    })
    .catch((error) => {
      return { status: false, err: error };
    });

export {
  myCreateUserWithEmailAndPassword,
  mySignInWithEmailAndPassword,
  mySignOut,
  mySignInWithGoogle,
  auth,
};
