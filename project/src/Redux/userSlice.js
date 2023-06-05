import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const s = localStorage.getItem("user");
    return s ? JSON.parse(s) :  undefined ;
  } catch (error) {
    console.error("Error loading user from local storage");
    return undefined;
  }
};

export const usersSlice = createSlice({
  name: "users",
  initialState:{user:getInitialState()},

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = undefined;
      localStorage.removeItem("user");
     
    },
  },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
