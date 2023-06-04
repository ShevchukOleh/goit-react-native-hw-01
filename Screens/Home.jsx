import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

export default function Home() {

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
          backgroundColor: 'fff',
        },
        tabStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
        },
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{title: 'Публікації'}}/>
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{title: 'Створити публікацію'}}/>
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false}}/>
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


