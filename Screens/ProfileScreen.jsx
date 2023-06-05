// import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import background from '../assets/images/iosBackground.png';
// import addImage from '../assets/images/add.png';
// import users from '../assets/user.json'
// import { useState } from "react";


// export default function ProfileScreen() {
//     const [userList, setUserList] = useState(users);

//     return (
//         <SafeAreaView style={styles.container}>
//         <ScrollView>
//         <View style={{}}>
//       <ImageBackground source={background} style={styles.image}>
//           <View style={styles.section}>
//           {/* <ScrollView> */}
//             {userList.map((user) => (
//               <View key={user.id}>
//                 <View style={styles.userImagePosition}>
//                   <Image style={styles.userImage} source={{ uri: user.avatar }} />
//                   <Image style={styles.addImage} source={addImage} />
//                 </View>
//                 <Text style={styles.title}>{user.name}</Text>
//                 {/* <ScrollView> */}
//                   {user.posts.map((post) => (
//                     <View style={styles.postOne} key={post.id}>
//                       <Image style={{ width: 343, height: 240 }} source={{ uri: post.image }} />
//                       <Text>{post.title}</Text>
//                       <Text>{post.likes}</Text>
//                       <Text>{post.comments}</Text>
//                     </View>
//                   ))}
//                 {/* </ScrollView> */}
//               </View>
//             ))}
//             {/* </ScrollView> */}
//           </View>
//       </ImageBackground>
//     </View>
//     </ScrollView>
//     </SafeAreaView>
//     )
// }

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     //   alignItems: 'flex-end',
//     //   justifyContent: 'flex-end',
//       alignItems: "center",
//     justifyContent: "center",
//     },
//     image: { 
//       flex: 1,
//       width: '100%',
//       height: '100%',
//       justifyContent: 'center',
//       resizeMode: 'cover'
//     },
//     userImagePosition: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       top: -windowWidth * 0.25,
//     },  
//     userImage: {
//       position: 'absolute',
//       backgroundColor: '#F6F6F6',
//       width: 120,
//       height: 120,
//       borderRadius: windowWidth * 0.05,
//     },
//     addImage: {
//       position: 'absolute',
//       top: windowWidth * 0.04,
//       left: windowWidth * 0.58,
//     },
//     title: {
//       fontFamily: 'Roboto-Medium',
//       fontSize: 30,
//       lineHeight: 35,
//       textAlign: 'center',
//       letterSpacing: 0.01,
//       color: '#212121',
//       marginBottom: 33,
//     },
//     position: {
//       flex: 1,
//       justifyContent: 'flex-end',
//     },
//     section: {
//       paddingTop: 92,
//       paddingLeft: 16,
//       paddingRight: 16,
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       top: '30%',
//       borderTopLeftRadius: 25,
//       borderTopRightRadius: 25,
//       backgroundColor: '#fff',
//     },
//     postsAll: {
//         flex: 1,
//         overflow: 'scroll',
//     },
//     postOne: {
//         // overflow: 'scroll',
//         flex: 1,
//         backgroundColor: 'grey',
//     },
//     scrollView: {
//         flexGrow: 1,
//     },
// })

import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import background from '../assets/images/iosBackground.png';
import addImage from '../assets/images/add.png';
import users from '../assets/user.json';
import { useState } from "react";

export default function ProfileScreen() {
    const [userList, setUserList] = useState(users);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground source={background} style={styles.image}>
                    <View style={{height:147}}></View>
                    <View style={styles.section}>
                        {userList.map((user) => (
                            <View key={user.id}>
                                <View style={styles.userImagePosition}>
                                    <Image style={styles.userImage} source={{ uri: user.avatar }} />
                                    <Image style={styles.addImage} source={addImage} />
                                </View>
                                <Text style={styles.title}>{user.name}</Text>
                                <View style={styles.postsAll}>
                                    {user.posts.map((post) => (
                                        <View style={styles.postOne} key={post.id}>
                                            <Image style={{ width: 343, height: 240 }} source={{ uri: post.image }} />
                                            <Text>{post.title}</Text>
                                            <Text>{post.likes}</Text>
                                            <Text>{post.comments}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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
        width: '100%',
        minHeight: windowHeight,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
    },
    postsAll: {
        flexGrow: 1,
        overflow: 'scroll',
    },
    postOne: {
        backgroundColor: 'grey',
        marginBottom: 16,
        padding: 16,
    }
})