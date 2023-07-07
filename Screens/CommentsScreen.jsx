import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { commentsList, createNewComment } from '../redux/posts/operations';

export default function CommentsScreen({ route }) {
  const { id, photo } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const dispatch = useDispatch();
  
  const fetchComments = async () => {
    try {
      const result = await dispatch(commentsList(id)).unwrap();
      const postComments = result.find(post => post.id === id)
      setAllComments(postComments.comments);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchComments();

    return () => setAllComments([]);
  }, [id]);

  const handleNewComment = async () => {
    try {
      await dispatch(createNewComment({ id, comment })).unwrap();
      const result = await dispatch(commentsList(id)).unwrap();
      setAllComments(result.payload);
      setComment('');
      fetchComments();
    } catch (e) {
      console.error(e);
    } 
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: photo }} style={{ width: '100%', height: 240, marginBottom: 8 }} />
        <View style={styles.commentsAll}>
          {allComments && allComments.length > 0 ? (
            allComments.map((item) => (
              <View style={styles.commentContainer} key={item.id}>
                <Image style={styles.userAvatar} source={{ uri: item.photo }} />
                <View style={styles.comment}>
                  <Text>{item.comment}</Text>
                  <Text style={styles.commentDate}>{new Date(item.created_at).toLocaleDateString()}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text>No comments available</Text>
          )}
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : -190}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            placeholder="Коментувати..."
            value={comment}
            onChangeText={(value) => setComment(value)}/>
          <TouchableOpacity style={styles.buttonSend} onPress={handleNewComment}>
            <Icon name={'arrow-up'} size={18} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  commentsAll: {
    marginTop: 32,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  userAvatar: {
    width: 28,
    height: 28,
    backgroundColor: '#000',
  },
  comment: {
    flex: 1,
    marginLeft: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    color: '#fff',
    padding: 16,
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  commentDate: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'right',
    color: '#BDBDBD',
  },
  inputContainer: {},
  input: {
    backgroundColor: '#F6F6F6',
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 100,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Medium',
  },
  buttonSend: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 34,
    height: 34,
    backgroundColor: '#FF6C00',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
