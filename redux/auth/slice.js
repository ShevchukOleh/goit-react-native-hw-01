import { createSlice } from '@reduxjs/toolkit';
import { LogIn, LogOut, SignUp } from './operations';

const initialState = {
  username: null,
  email: null,
  isLogin: false,
};

export const Authentication = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LogIn.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.isLogin = true;
    });
    builder.addCase(SignUp.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.isLogin = true;
    });
    builder.addCase(LogOut.fulfilled, (state) => {
        state.username = null;
        state.email = null;
        state.isLogin = false;
    });
  },
});

export const AuthenticationReducer = Authentication.reducer;

