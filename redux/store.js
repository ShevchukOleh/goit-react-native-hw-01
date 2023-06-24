import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Auth } from './auth/slice';

const rootReducer = combineReducers({
  [Auth.name]: Auth.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});