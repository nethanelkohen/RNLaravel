import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Coin from './screens/Coin';

const AppNavigator = createStackNavigator({
  CoinScreen: { screen: Coin },
  HomeScreen: { screen: Home }
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
