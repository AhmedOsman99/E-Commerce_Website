import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { id, name, image, price, quantity } = action.payload;
            const existingProduct = state.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            return []
        },
        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            const existingProduct = state.find((product) => product.id === id);

            if (existingProduct) {
                existingProduct.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const existingProduct = state.find((product) => product.id === id);

            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity--;
            }
        },

    },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;