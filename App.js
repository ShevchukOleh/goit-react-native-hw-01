import React from 'react';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  return (
    <RegistrationScreen/>
  )
}
