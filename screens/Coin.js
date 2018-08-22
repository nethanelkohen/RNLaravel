import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../services/FetchCoins';
import CoinList from '../components/CoinList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B6A6BB'
  }
});

export class Coin extends Component {
  state = {
    coins: []
  };

  async componentDidMount() {
    const coins = await ajax.fetchCoins();
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

export default Coin;
