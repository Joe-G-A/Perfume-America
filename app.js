import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Color from './src/login/color.js';
import Smell from './src/login/smell.js';
import Flower from './src/login/flower.js';
import Name from './src/login/name.js';

import Perfume from './src/login/perfume.js';








const RootStack = createStackNavigator(
{
   Home: { screen: Homescreen },
  Name: {screen: Name},
  Color: { screen: Color },
  Smell: {screen: Smell},
   Flower: { screen: Flower },
  Perfume: {screen: Perfume},
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

