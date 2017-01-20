import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  StyleSheet
} from 'react-native';

import Routes from './navigation/routes';
import RouteMapper from './navigation/route-mapper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  wrapper: {
    flex: 1,
    marginTop: 56
  }
});

export default class App extends Component {
  renderScene(route, nav) {
    const Component = route.component;
    const props = route.props || {};
    return (
      <View style={styles.wrapper}>
        <Component
          nav={nav}
          currentRoute={route}
          {...props} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          renderScene={this.renderScene}
          initialRoute={Routes.main}
          navigationBar={
            <Navigator.NavigationBar
              style={styles.navbar}
              routeMapper={RouteMapper} />
          } />
      </View>
    );
  }
}
