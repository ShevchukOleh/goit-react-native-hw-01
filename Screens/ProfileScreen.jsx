import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import background from '../assets/images/iosBackground.png';
import addImage from '../assets/images/add.png';
import users from '../assets/user.json';
import { useState } from "react";
import Icon from 'react-native-vector-icons/Feather';


export default function ProfileScreen() {
    const [userList, setUserList] = useState(users);

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={background} style={styles.image}>
                    <View style={{height:180}}></View>
                    <View style={styles.section}>
                        {userList.map((user) => (
                            <View key={user.id}>
                                <View style={styles.userImagePosition}>
                                    <Image style={styles.userImage} source={{ uri: user.avatar }} />
                                    {/* <Image style={styles.userImage}/> */}
                                    <Image style={styles.addImage} source={addImage} />
                                </View>
                                <Text style={styles.title}>{user.name}</Text>
                                <View style={styles.postsAll}>
                                    {user.posts.map((post) => (
                                        <View style={styles.postOne} key={post.id}>
                                            <Image style={styles.postImage} source={{ uri: post.image }} />
                                            <Text style={styles.photoTitle}>{post.title}</Text>
                                            <View style={{flexDirection: 'row', gap: 27,}}>
                                                <View style={{flexDirection: 'row', gap: 8}}>
                                                    <Icon name={'message-circle'} size={18} color={'#FF6C00'}/>
                                                    <Text>{post.coments}</Text>
                                                </View>
                                                <View style={{flexDirection: 'row', gap: 8}}>
                                                    <Icon name={'thumbs-up'} size={18} color={'#FF6C00'}/>
                                                    <Text>{post.likes}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
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
})