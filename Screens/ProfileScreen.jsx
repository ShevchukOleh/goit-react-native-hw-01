import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { LogOut } from "../redux/auth/operations";
import Icon from 'react-native-vector-icons/Feather';
import { postsList } from "../redux/posts/operations";
import background from '../assets/images/iosBackground.png';
import addImage from '../assets/images/add.png';
import "firebase/firestore";
import 'firebase/auth';
// import { auth } from "../config";
import * as ImagePicker from 'expo-image-picker';
import { persistor, store } from "../redux/store";

export default function ProfileScreen({ navigation }) {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [avatar, setAvatar] = useState(null);



    persistor.persist().then(() => {
        const state = store.getState();
  
        const userData = state.auth;
  
        console.log(userData);
    })
    
    
    const avatarSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const selectedAsset = result.assets[0];
            setAvatar(selectedAsset.uri);
        }
    };

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await postsList()();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };
    
        loadPosts();
    }, [postsList]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={background} style={styles.image}>
                    <View style={{height:180}}></View>
                    <View style={styles.section}>
                        <View>
                            <TouchableOpacity onPress={avatarSelect}>
                                <View style={styles.userImagePosition}>
                                {avatar ? (
                                    <Image style={styles.userImage} source={{ uri: avatar }} />
                                ) : (
                                    <Image style={styles.userImage} />
                                )}
                                <Image style={styles.addImage} source={addImage} />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.title}>{auth.currentUser ? auth.currentUser.displayName : 'user'}</Text>
                            <TouchableOpacity style={styles.logOutButton} onPress={() => dispatch(LogOut())}>
                                <Icon name="log-out" color={'#BDBDBD'} size={24} />
                            </TouchableOpacity>
                            <View style={styles.postsAll}>
                                {posts.map((item) => {
                                    if (item.email === auth.currentUser.email) {
                                        return (
                                            <View style={styles.postOne} key={item.id}>
                                                <Image style={styles.postImage} source={{ uri: item.photo }} />
                                                <Text style={styles.photoTitle}>{item.name}</Text>
                                                <View style={{ flexDirection: 'row', gap: 27, }}>
                                                    <TouchableOpacity onPress={() => {
                                                        navigation.navigate('Comments', { photo: item.photo, id: item.id });
                                                    }}>
                                                        <View style={{ flexDirection: 'row', gap: 2 }}>
                                                            <Icon name={'message-circle'} size={18} color={'#FF6C00'} />
                                                            <Text>{item.comments ? item.comments.length : 0}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <View style={{ flexDirection: 'row', gap: 8 }}>
                                                        <Icon name={'thumbs-up'} size={18} color={'#FF6C00'} />
                                                        <Text>{item.likes}</Text>
                                                    </View>
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
                                        )
                                    }
                                })}
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    userImagePosition: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -windowWidth * 0.25,
    },
    userImage: {
        position: 'absolute',
        backgroundColor: '#F6F6F6',
        width: 120,
        height: 120,
        borderRadius: windowWidth * 0.05,
    },
    addImage: {
        position: 'absolute',
        top: windowWidth * 0.04,
        left: windowWidth * 0.58,
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
        marginBottom: 33,
    },
    section: {
        paddingTop: 92,
        paddingLeft: 16,
        paddingRight: 16,
        minHeight: windowHeight,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
    postsAll: {
        overflow: 'scroll',
    },
    postOne: {
        paddingBottom: 35,
    },
    postImage: {
        width: '100%',
        height: 240,
    },
    photoTitle: {
        fontFamily:'Roboto-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
        marginTop: 8,
        marginBottom: 11,
    },
    logOutButton: {
        position: "absolute",
        right: windowWidth * 0.03,
        top: windowWidth * -0.2, 
    }
})