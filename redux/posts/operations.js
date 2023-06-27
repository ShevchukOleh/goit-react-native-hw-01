// import { auth, database } from '../../config';

// import { collection, addDoc } from "firebase/firestore";

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { child, get, getDatabase, push, ref, set } from 'firebase/database';

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { createAsyncThunk, rejectWithValue, createSlice } from '@reduxjs/toolkit';
import { auth, database } from '../../config';

export const createPost = createAsyncThunk(
  'post/createPost',
  async ({ name, cords, photo, location }, { rejectWithValue, getState }) => {
    try {
      const { email, username } = getState().auth;
      const newPost = { email, name, cords, photo, location };

      const firestore = getFirestore();

      const docRef = await addDoc(collection(firestore, 'posts'), newPost);

      return {};
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

export const postsList = () => {
  return async () => {
    try {
      const snapshot = await getDocs(collection(database, 'posts'));
      const postList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return postList;
    } catch (e) {
      throw new Error(e?.message);
    }
  };
};

export const createNewComment = createAsyncThunk(
  'post/createNewComment',
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const { uid, displayName } = auth.currentUser;

      const newComment = {
        uid,
        displayName,
        comment,
        created_at: Date.now(),
      };

      await push(ref(database, 'comments/' + id), newComment);

      return;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

export const commentList = createAsyncThunk('post/commentList', async (id, { rejectWithValue }) => {
  try {
    const snapshot = await get(child(ref(database), 'comments/' + id));
    let commentList = [];

    if (snapshot.exists()) {
      snapshot.forEach((item) => {
        commentList.push({
          id: item.key,
          ...item.val(),
        });
      });
    }
    return commentList;
  } catch (e) {
    return rejectWithValue(e?.message);
  }
});