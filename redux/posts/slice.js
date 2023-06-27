import { createSlice } from '@reduxjs/toolkit';
import { postList, postsList } from './operations';

const initialState = {
  posts: [],
};

export const PostsSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: {
    [postsList.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const PostsSliceReducer = PostsSlice.reducer;