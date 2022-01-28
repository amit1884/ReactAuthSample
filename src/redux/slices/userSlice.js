import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
  user_info: {
    fullname: "Amit",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser(state, action) {
      state.user_info = action.payload;
    },
    removeUser(state) {
      state.user_info = {};
    },
  },
});

export const userAction = userSlice.actions;
