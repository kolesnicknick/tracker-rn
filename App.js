import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateTrackScreen          from './screens/CreateTrackScreen';
import EditTrackScreen          from './screens/EditTrackScreen';
import SigninScreen          from './screens/SigninScreen';
import SignupScreen          from './screens/SignupScreen';
import TrackListScreen          from './screens/TrackListScreen';
import AccountScreen          from './screens/AccountScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator }                      from 'react-navigation-stack';
import { createBottomTabNavigator }                  from 'react-navigation-tabs';
import TrackDetailScreen                             from './screens/TrackDetailScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen,

  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    CreateTrack: CreateTrackScreen,
    Account: AccountScreen,
  })
});


export default createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
