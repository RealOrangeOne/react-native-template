import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';
import { PROJECT_URL } from '../settings/consts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default class About extends Component {
  constructor() {
    super();
    this.goToRepo = this.goToRepo.bind(this);
  }

  goToRepo() {
    Linking.openURL(PROJECT_URL);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.goToRepo}
          title="Read More"/>
      </View>
    );
  }
}
