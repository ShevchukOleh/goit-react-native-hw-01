import { Dimensions,ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Image, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import background from '../assets/images/iosBackground.png';
import addImage from '../assets/images/add.png';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SignUp } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

const initialState = {
  email: '',
  password: '',
  username: '',
};

export default function RegistrationScreen() {
  const [user, setUser] = useState(initialState);
  const [avatar, setAvatar] = useState(null);
  const [watchPassword, setWatchPassword] = useState({ secureTextEntry: true, buttonText: 'Показати' });
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
  
  const handleFieldChange = (fieldName) => (text) => {
    setUser((prevState) => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const handleSignUp = async () => {
    try {
      await dispatch(SignUp(user)).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  const seePassword = () => {
    setWatchPassword((prevState) => ({ secureTextEntry: !prevState.secureTextEntry,
    buttonText: prevState.secureTextEntry ? 'Приховати' : 'Показати' }));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <KeyboardAvoidingView style={styles.position} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.section}>
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
              <Text style={styles.title}>Реєстрація</Text>
              <SafeAreaView>
                <TextInput 
                  style={styles.input} 
                  placeholder='Логін'
                  value={user.username}
                  onChangeText={handleFieldChange('username')}
                >
                </TextInput>

                <TextInput 
                  style={styles.input} 
                  placeholder='Адреса електронної пошти'
                  value={user.email}
                  onChangeText={handleFieldChange('email')}
                >
                </TextInput>

                <TextInput 
                  style={styles.inputLast} 
                  placeholder='Пароль' 
                  value={user.password}
                  onChangeText={handleFieldChange('password')}
                  secureTextEntry={watchPassword.secureTextEntry}
                >
                </TextInput>
                <TouchableOpacity style={styles.password}>
                  <Text style={styles.checkPassword} onPress={seePassword}>{watchPassword.buttonText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
              </SafeAreaView>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    resizeMode: 'cover,'
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
  position: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  section: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '30%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginBottom: 16,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderStyle: 'solid',
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  inputLast: {
    borderWidth: 1,
    height: 50,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderStyle: 'solid',
    paddingLeft: 16,
    paddingBottom: 15,
    paddingTop: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
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
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  disabledButton: {
    color: "#FF6C00",
    borderRadius: 100,
    backgroundColor: 'grey',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
  },
  logIn: {
    marginTop: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
  password: {
    position: 'absolute',
    top: 148,
    right: windowWidth * 0.05,
  },
  checkPassword: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  errorName: {
    position: 'absolute',
    color: 'red',
    top: -20,
  },
  errorEmail: {
    position: 'absolute',
    color: 'red',
    top: 49,
  },
  errorPassword: {
    position: 'absolute',
    color: 'red',
    top: 115,
  },
});
