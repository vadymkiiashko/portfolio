import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setCurrentProjects: (state , action) => {
      state.projects = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentProjects, decrement, incrementByAmount } = projectSlice.actions

export default projectSlice.reducer