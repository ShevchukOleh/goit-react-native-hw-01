import { Dimensions,ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Image } from 'react-native';
import background from '../assets/images/iosBackground.png';
import addImage from '../assets/images/add.png';

export default function RegistrationScreen() {

  return (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
            <KeyboardAvoidingView style={styles.position} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.section}>
                    <TouchableOpacity>
                        <View style={styles.userImagePosition}>
                            <Image style={styles.userImage}></Image>
                            <Image style={styles.addImage} source={addImage} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>Реєстрація</Text>
                    <SafeAreaView>
                        <TextInput style={styles.input} placeholder='Логін'></TextInput>
                        <TextInput style={styles.input} placeholder='Адреса електронної пошти'></TextInput>
                        <TextInput style={styles.inputLast} placeholder='Пароль'></TextInput>
                        <TouchableOpacity style={styles.password} >
                            <Text style={styles.checkPassword}>Показати</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>Зареєструватися</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                    <TouchableOpacity>
                        <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingTop: Platform.OS === 'ios' ? windowWidth * 0.05 : 0,
//     paddingBottom: Platform.OS === 'ios' ? windowWidth * 0.05 : 0,
//   },
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
    color: "#BDBDBD",
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
    color: "#BDBDBD",
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
    top: 148,
    right: windowWidth * 0.05,
  },
  checkPassword: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});