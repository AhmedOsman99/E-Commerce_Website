import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const s = localStorage.getItem("cart");
    return s ? JSON.parse(s) : [];
  } catch (error) {
    console.error("Error loading cart from local storage");
    return [];
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price, quantity } = action.payload;
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(state));
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      localStorage.removeItem("cart");
      return [];
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  updateCartItemQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
