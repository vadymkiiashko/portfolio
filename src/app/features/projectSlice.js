import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const initialState = {
  projects: [],
  user: {},
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setCurrentProjects: (state, action) => {
      state.projects = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    ///needs changes-------------------------------------------------
    signup: (state, action) => {
      const { email, password } = action.payload;
      auth;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log('creating')
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(' errror ')
          // ..
        });
    },
    //----------------------------------------------------
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentProjects, decrement, incrementByAmount, signup } =
  projectSlice.actions;

export default projectSlice.reducer;
