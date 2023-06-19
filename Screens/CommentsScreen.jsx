import React from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function CommentsScreen({ route }) {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: photo }} style={{ width: '100%', height: 240, marginBottom: 8 }} />
        <View style={styles.commentsAll}>
          <View style={styles.commentContainer}>
            <Image style={styles.userAvatar} />
            <View style={styles.comment}>
              <Text>Thank you! That was very helpful!</Text>
              <Text style={styles.commentDate}>Date</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : -190}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Коментувати..." />
          <TouchableOpacity style={styles.buttonSend}>
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
