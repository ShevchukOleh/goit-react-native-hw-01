import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationReducer } from './auth/slice';
import { PostsSliceReducer } from './posts/slice';


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(persistConfig, AuthenticationReducer),
  posts: PostsSliceReducer
});


export const store = createStore(reducer, applyMiddleware(thunk));


// export const store = configureStore({
//   reducer,
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

export const persistor = persistStore(store);
