import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("productsSlice/getProducts", async () => {
    const response = await axios.get('http://localhost:3005/products');
    return response.data;
});
export const selectProduct = createAsyncThunk("productsSlice/selectProduct", async (id) => {
    const response = await axios.get(`http://localhost:3005/products/${id}`);
    return response.data;
});


export const addProduct = createAsyncThunk("productsSlice/addProduct", async (product) => {
    const response = await axios.post('http://localhost:3005/products', product);
    return response.data;
});

export const updateProduct = createAsyncThunk("productsSlice/updateProduct", async (product) => {
    const response = await axios.put(`http://localhost:3005/products/${product.id}`, product);
    return response.data;
});

export const deleteProduct = createAsyncThunk("productsSlice/deleteProduct", async (id) => {
    await axios.delete(`http://localhost:3005/products/${id}`);
    return id;
});

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(selectProduct.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        });
    },
});

export const { } = productsSlice.actions;

export default productsSlice.reducer;


