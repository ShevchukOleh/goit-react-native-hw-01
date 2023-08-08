import { createSlice } from '@reduxjs/toolkit';
import { postsList } from './operations';

const initialState = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postsList, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const PostsSliceReducer = PostsSlice.reducer;
