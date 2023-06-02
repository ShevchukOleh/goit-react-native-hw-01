import { ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';

export default function RegistrationScreen() {
  const background = { url: 'https://i.ibb.co/rtB58G4/Photo-BG-2.jpg' };
    
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <KeyboardAvoidingView style={styles.position} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
        </KeyboardAvoidingView>
      </ImageBackground>
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
    top: '32%',
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
});