import { createSlice } from "@reduxjs/toolkit";
//import {HYDRATE} from "next-redux-wrapper"

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], completedTodos: [] },
  reducers: {
    updateTodos(state, action) {
      state.todos = action.payload;
    },
    updateCompletedTodos(state, action) {
      state.completedTodos = action.payload;
    },
  },
});

// extraReducers: {
//     [HYDRATE] : (state,action) => {

//     }
// }

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
