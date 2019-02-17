/**
 * This enables Strict Mode, which adds improved error handling
 * and disables some less-than-ideal JavaScript language features.
 * In simple terms, it makes JavaScript better!
 */
'use strict';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

class SearchPage extends Component {
  // static navigationOptions = {
  //   title: 'Property Finder'
  // };

  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: { screen: SearchPage }
});

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
