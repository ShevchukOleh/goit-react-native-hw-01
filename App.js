import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from './Screens/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './Screens/MapScreen';
import CommentsScreen from './Screens/CommentsScreen';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false}} />
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            title: 'Коментарі',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 16 }}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-left" color={'#212121CC'} size={24} />
              </TouchableOpacity>
            ),
            tabBarStyle: { display: 'none' },
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
