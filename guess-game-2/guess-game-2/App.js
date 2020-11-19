import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import StartScreen from './components/StartScreen';
import Gamescreen from './components/GameScree';
import EndScreen from './components/EndScreen';

export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Guess A Number" component={Gamescreen} />
        <Stack.Screen name="End" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
