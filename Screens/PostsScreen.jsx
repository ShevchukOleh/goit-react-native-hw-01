import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { postsList } from '../redux/posts/operations';

export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsList())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Failed to fetch posts:', error);
      });
  }, [postsList]);

  const renderItem = ({ item }) => {
    const Photo = 'https://i.ibb.co/SwS2WHh/blank-profile-picture-973460-1280.webp';
    return (
        <View style={{paddingBottom: 15}}>
          <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
          <Image style={styles.userPhoto} source={{uri: Photo}}></Image>
          <View style={{paddingVertical: 15, paddingLeft: 8}}>
            <Text style={{ marginBottom: 1, fontSize: 13, fontWeight: 'bold'}}>{item.displayName}</Text>
            <Text style={{fontSize: 11}}>{item.email}</Text>
          </View>
        </View>
        <View style={styles.postContainer}>
          <Image source={{ uri: item.photo }} style={{ width: '100%', height: 240, marginBottom: 8}}/>

          <Text style={styles.postName}>{item.name}</Text>
          
          <View style={styles.photoComents}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Comments', { photo: item.photo, id: item.id});
              }}
              style={{marginRight: 15}}
            >
              <View style={{flexDirection: 'row', gap:2}}>
                <Icon name={'message-circle'} size={18} color={'#FF6C00'} />
                <Text>{item.comments ? item.comments.length : 0}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                navigation.navigate('MapScreen', { cords: item.cords });
              }}
            >
              <Icon name={'map-pin'} size={18} color={'#FF6C00'} />
              <Text>{item.location}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  userPhoto: {
    width: 60,
    height: 60,
    backgroundColor: '#000'
  },
  postContainer: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  postName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 11,
    color: '#000'
  },
  photoComents: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});