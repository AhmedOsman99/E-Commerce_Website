import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./userSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    users: usersSlice,
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
