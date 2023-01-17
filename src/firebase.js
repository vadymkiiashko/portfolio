import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMeGRVQAvBzo9yCFKUZ1eNLilbhy3PB_k",
  authDomain: "auth-development-76237.firebaseapp.com",
  projectId: "auth-development-76237",
  storageBucket: "auth-development-76237.appspot.com",
  messagingSenderId: "97143514142",
  appId: "1:97143514142:web:2811dd1b2ea24f99417a0f"
};

const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
