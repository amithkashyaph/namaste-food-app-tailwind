import { createSlice } from "@reduxjs/toolkit";

/**
 * 1. Slice is a small portion of overall data specific to a usecase.
 * 2. Slice is used to keep the appstore lean and also components instaed of subscribing to the global store which is unnecessary,
 *    they can subscribe to specific slices from which they need to read the data. This avoids unnecessary rendering of components when
 *    Global state or appStore state changes
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // We are directly mutataing the state here which was not allowed earlier
      // Behind the scenes redux uses immer js a tiny library that helps working immutable state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
