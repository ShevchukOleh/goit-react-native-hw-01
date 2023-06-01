import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const background = {url: 'https://i.ibb.co/rtB58G4/Photo-BG-2.jpg'};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.position}>
          <View style={styles.section}>
          <Text style={styles.title}>Реєстрація</Text>
          <SafeAreaView>
            <TextInput style={styles.input} placeholder='Логін'></TextInput>
            <TextInput style={styles.input} placeholder='Адреса електронної пошти'></TextInput>
            <TextInput style={styles.inputLast} placeholder='Пароль'></TextInput>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
          </SafeAreaView>
        </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 33,
    paddingLeft: 108,
    paddingRight: 107,
  },
  position: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  section: {
    height: 549,
    flex: 0,
    backgroundColor: '#fff',
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderStyle: 'solid',
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 16,
  },
  inputLast: {
    height: 50,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderStyle: 'solid',
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 16,
  },
  button: {
    color: "#FF6C00",
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
  },
  buttonText: {
    color: '#fff'
  },
  logIn: {
    marginTop: 16,
    paddingLeft: 108,
    paddingRight: 108,
  },
});


