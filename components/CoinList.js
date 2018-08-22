import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import PropTypes from 'prop-types';

export default class CoinList extends Component {
  static propTypes = {
    coins: PropTypes.array.isRequired
  };

  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
    <ListItem title={item.id} subtitle={item.description} />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.coins}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  coinsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cointext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
