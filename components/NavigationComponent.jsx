import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';
import Home from '../Screens/Home';
import MapScreen from '../Screens/MapScreen';
import CommentsScreen from '../Screens/CommentsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export default function NavigationComponent() {
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
    )
}
