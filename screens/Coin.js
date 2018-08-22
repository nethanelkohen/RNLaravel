import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CoinList from '../components/CoinList';

const URI = 'http://localhost:8000';

class Coin extends Component {
  state = {
    coins: []
  };

  async componentDidMount() {
    let response = await fetch(URI + '/coins');
    let coins = await response.json();
    this.setState({ coins });
  }

  render() {
    let { coins } = this.state;
    return (
      <View style={styles.container}>
        {coins.length ? <CoinList coins={coins} /> : <Text>No coins</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B6A6BB'
  }
});

export default Coin;
