import { Dimensions,ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import background from '../assets/images/iosBackground.png';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LogIn } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  const [watchPassword, setWatchPassword] = useState({ secureTextEntry: true, buttonText: 'Показати' });
  const seePassword = () => {
    setWatchPassword((prevState) => ({ secureTextEntry: !prevState.secureTextEntry,
    buttonText: prevState.secureTextEntry ? 'Приховати' : 'Показати' }));
  }

  const handleChange = (fieldName) => (text) => {
    setUser((prevState) => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const handleLogIn = async () => {
    try {
      await dispatch(LogIn(user)).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <KeyboardAvoidingView style={styles.position} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.section}>
              <Text style={styles.title}>Увійти</Text>
              <SafeAreaView>

                <TextInput 
                  style={styles.input} 
                  placeholder='Адреса електронної пошти'
                  value={user.email}
                  onChangeText={handleChange('email')}
                ></TextInput>

                <TextInput 
                  style={styles.inputLast} 
                  placeholder='Пароль' 
                  value={user.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={watchPassword.secureTextEntry}
                ></TextInput>

                <TouchableOpacity style={styles.password} >
                  <Text style={styles.checkPassword} onPress={seePassword}>{watchPassword.buttonText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogIn}>
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
              </SafeAreaView>
              <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.logIn}>Немає акаунту? Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}
const windowWidth = Dimensions.get('window').width;

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
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
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
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
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
    top: 82,
    right: windowWidth * 0.05,
  },
  checkPassword: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  errorEmail: {
    position: 'absolute',
    color: 'red',
    top: -20,
  },
  errorPassword: {
    position: 'absolute',
    color: 'red',
    top: 50,
  },
})
