import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import background from '../assets/images/iosBackground.png';
import addImage from '../assets/images/add.png';
import { useDispatch } from "react-redux";
import { LogOut } from "../redux/auth/operations";
import Icon from 'react-native-vector-icons/Feather';
import { postsList } from "../redux/posts/operations";

export default function ProfileScreen({navigation}) {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
    try {
        const fetchedPosts = await postsList()();
        setPosts(fetchedPosts);
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={background} style={styles.image}>
                    <View style={{height:180}}></View>
                    <View style={styles.section}>
                        <View>
                            <View style={styles.userImagePosition}>
                                {/* <Image style={styles.userImage} source={{ uri: user.avatar }} /> */}
                                <Image style={styles.userImage}/>
                                <Image style={styles.addImage} source={addImage} />
                            </View>
                            <Text style={styles.title}>name</Text>
                            <TouchableOpacity style={styles.logOutButton} onPress={() => dispatch(LogOut())}>
                                <Icon name="log-out" color={'#BDBDBD'} size={24} />
                            </TouchableOpacity>
                            <View style={styles.postsAll}>
                                {posts.map((item) => (
                                    <View style={styles.postOne} key={item.id}>
                                        <Image style={styles.postImage} source={{ uri: item.photo }} />
                                        <Text style={styles.photoTitle}>{item.name}</Text>
                                        <View style={{flexDirection: 'row', gap: 27,}}>
                                            <View style={{flexDirection: 'row', gap: 8}}>
                                                <Icon name={'message-circle'} size={18} color={'#FF6C00'}/>
                                                <Text>{item.coments}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', gap: 8}}>
                                                <Icon name={'thumbs-up'} size={18} color={'#FF6C00'}/>
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
                                ))}
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