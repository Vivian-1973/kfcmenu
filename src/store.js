// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          return state.filter(cartItem => cartItem.id !== action.payload);
        }
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

// Theme Slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

// Configure Store
export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    theme: themeSlice.reducer,
  },
});
