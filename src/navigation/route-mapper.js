import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default {
  LeftButton: function (route, navigator, index, navState) {
    if (index >= 1) {
      return (
        <Text>Back</Text>
      );
    }
    return <View />;
  },

  RightButton: function (route, navigator, index, navState) {
    return <View />;
  },

  Title: function (route, navigator, index, navState) {
    return <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
    </View>
  }
}
