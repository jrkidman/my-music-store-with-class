import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { cartReducer } from './cartSlice';

const preloadedState = JSON.parse(localStorage.getItem('application'))
  ? JSON.parse(localStorage.getItem('application'))
  : { user: null };

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  console.log('store.subscribe state: ', state);

  localStorage.setItem('application', JSON.stringify(state));
});

export default store;
