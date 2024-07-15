// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Importing the product reducer from productSlice.js
import cartReducer from "./cartSlice"; // Importing the cart reducer from cartSlice.js

// Configuring the Redux store using configureStore from Redux toolkit
const store = configureStore({
  reducer: {
    products: productReducer, // Adding the product reducer under the 'products' slice of the store
    cart: cartReducer, // Adding the cart reducer under the 'cart' slice of the store
  },
});

export default store;
