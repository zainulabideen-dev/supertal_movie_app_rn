import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesScreen from '../movies';
import PopularMoviesScreen from '../popular';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar backgroundColor={'#2C3B90'} />
      <Tab.Navigator
        initialRouteName="latest"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2C3B90',
          tabBarInactiveTintColor: '#273746',
          tabBarStyle: {height: 65},
          tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 5,
            includeFontPadding: false,
            fontFamily: 'Poppins-Regular',
          },
        }}>
        <Tab.Screen
          name="latest"
          component={MoviesScreen}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name="movie-roll"
                  color={color}
                  size={28}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="popular"
          component={PopularMoviesScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <AntDesign name="star" color={color} size={28} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
