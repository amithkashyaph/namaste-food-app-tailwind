import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
/**
 * 1. AppStore will be the complete store of our app where all the data related to our app resides
 * 2. AppStore will be a collection of multipple smaller reducers(slices) designed for specific components' usage
 */
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
