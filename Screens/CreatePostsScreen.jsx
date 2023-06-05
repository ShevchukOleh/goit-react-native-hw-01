import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export default function CreatePostsScreen() {
    const [photoAdded, setPhotoAdded] = useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");

    return (
        <View style={styles.section}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.iconCamera} onPress={() => setPhotoAdded(true)} activeOpacity={0.7}>
                <Icon name="camera" color={'#BDBDBD'} size={24}/></TouchableOpacity>
            </View>
            <Text style={styles.text}>Завантажте фото</Text>
            <TextInput style={styles.input} placeholder="Назва..." value={title}
                onChangeText={(text) => setTitle(text)}>
            </TextInput>
            <TextInput style={styles.input} placeholder="Місцевість..." value={location}
                onChangeText={(text) => setLocation(text)}>
            </TextInput>
            <TouchableOpacity style={[styles.button, 
                {backgroundColor: ((photoAdded && title && location) ? '#FF6C00' : '#F6F6F6')}]}
                disabled={!photoAdded || !title || !location}>
                <Text style={[styles.buttonText, { color: (photoAdded && title && location) ? '#fff' : '#BDBDBD' }]}>Опубліковати</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.iconContainer}><Icon name="trash-2" color={'#DADADA'} size={24}/></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        flex:1,
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 34,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        height: 240,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color:'#BDBDBD',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        marginTop: 8,
        marginBottom: 33,
    },
    input: {
        color:'#BDBDBD',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    },
    button: {
        color: "#FF6C00",
        borderRadius: 100,
        backgroundColor: '#FF6C00',
        paddingTop: 16,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 120,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
    },
    iconContainer: {
        paddingHorizontal: 23,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F6F6F6',
    },
    iconCamera: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
    },
});