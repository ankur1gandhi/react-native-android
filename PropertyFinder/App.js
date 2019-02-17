/**
 * This enables Strict Mode, which adds improved error handling
 * and disables some less-than-ideal JavaScript language features.
 * In simple terms, it makes JavaScript better!
 */
'use strict';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchPage from './SearchPage';

class App extends Component {
  static navigationOptions = {
    title: 'Property Finder'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text style={styles.description}>Hello World!</Text>
        <Button onPress={() => navigate('Search')} title="Search" />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: { screen: App },
    Search: { screen: SearchPage }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65
  }
});
