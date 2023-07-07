import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, database } from '../../config';

export const createPost = createAsyncThunk(
  'post/createPost',
  async ({ name, cords, photo, location }, { rejectWithValue, getState }) => {
    try {
      const { email } = getState().auth;
      const newPost = { email, name, cords, photo, location, displayName: auth.currentUser.displayName };

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

      const firestore = getFirestore();
      const postRef = doc(firestore, 'posts', id);
      await updateDoc(postRef, {
        comments: arrayUnion(newComment),
      });

      return;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

export const commentsList = createAsyncThunk(
  'post/commentsList',
  async (id, { rejectWithValue }) => {
    try {
      if (!id) {
        throw new Error('Invalid comment ID');
      }

      const firestore = getFirestore();
      const snapshot = await getDocs(collection(firestore, `posts`));
      const commentList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return commentList;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);
