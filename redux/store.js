import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationReducer } from './auth/slice';
import { PostsSliceReducer } from './posts/slice';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(persistConfig, AuthenticationReducer),
  posts: PostsSliceReducer
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);