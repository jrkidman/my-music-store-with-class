import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productFound = state.find(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (productFound) {
        // return the same cart but update quantity and total price
        const newShoppingCart = state.map((cartItem) => {
          if (cartItem.id === productFound.id) {
            const newItemQuantity = cartItem.quantity + 1;
            return {
              ...cartItem,
              quantity: newItemQuantity,
              total: newItemQuantity * cartItem.price,
            };
          }
          return cartItem;
        });
        return newShoppingCart;
      }
      // if product is not found then  add it to the cart for the first time
      const newCartItem = {
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      };
      return [...state, newCartItem];
    },

    // eslint-disable-next-line max-len
    removeFromCart: (state, action) => state.filter((cartItem) => cartItem.id !== action.payload),

    emptyCart: () => [],
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
