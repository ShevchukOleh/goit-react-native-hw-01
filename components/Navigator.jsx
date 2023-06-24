import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import { LogOut } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

const Tabs = createBottomTabNavigator();

export default function Navigation() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = color;
          let iconBackground = focused ? '#FF6C00' : 'transparent';

          if (route.name === 'PostsScreen') {
            iconName = 'grid';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = 'plus';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'user';
          }
          return (
            <View style={[styles.tabIconContainer, { backgroundColor: iconBackground }]}>
              <Icon name={iconName} size={size} color={iconColor} />
            </View> 
          )    
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        labelStyle: { display: 'none' },
        style: {
          backgroundColor: '#fff',
        },
        tabStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
        },
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{ title: 'Публікації', 
        headerRight: () => (
          <TouchableOpacity style={{ paddingRight: 16 }} onPress={() => dispatch(LogOut())}>
            <Icon name="log-out" color={'#BDBDBD'} size={24} />
          </TouchableOpacity>
        ),
      }}/>
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{ title: 'Створити публікацію', 
        headerLeft: () => (
          <TouchableOpacity style={{ paddingLeft: 16 }} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" color={'#212121CC'} size={24} />
          </TouchableOpacity>
        ),
        tabBarStyle: { display: 'none' },
      }}/>
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 8,
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
