import React, { Component } from 'react';

import  {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF'
  }
});

export default class Title extends Component {
  render() {
    const title = this.props.route.title || 'Title';
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{ title }</Text>
      </View>
    );
  }
}
