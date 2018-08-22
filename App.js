import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Coin from './screens/Coin';

const AppNavigator = createStackNavigator({
  CoinScreen: { screen: Coin }
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
