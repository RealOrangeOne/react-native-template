import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  backButton: {
    fontSize: 25,
    padding: 10
  }
});

export default {
  LeftButton: function (route, navigator, index, navState) {
    if (index >= 1) {
      return (
        <TouchableHighlight style={styles.container} onPress={navigator.pop} underlayColor="transparent">
          <Text style={styles.backButton}>&lt;</Text>
        </TouchableHighlight>
      );
    }
    return <View />;
  },

  RightButton: function (route, navigator, index, navState) {
    return <View />;
  },

  Title: function (route, navigator, index, navState) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
      </View>
    );
  }
}
