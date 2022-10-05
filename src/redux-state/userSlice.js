import { createSlice } from '@reduxjs/toolkit';

// this is how you split your state
const userSlice = createSlice({
  name: 'user',
  initialState: null, // redux doesn't accept undefined
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: (state, action) => null,
  },
});

// action creators.  functions that when called, create our actions
export const { signIn, signOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
