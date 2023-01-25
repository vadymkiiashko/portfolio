import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
  projects: [],
  user: null,
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
      const user  = action.payload;
      state.user = user;
    },
    signout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentProjects, decrement, incrementByAmount, signup ,signout} =
  projectSlice.actions;

export default projectSlice.reducer;
