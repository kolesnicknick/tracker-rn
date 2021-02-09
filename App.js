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
import { setNavigator }                               from './navigationRef';

import { Provider as AuthProvider, Context as AuthContext } from './context/AuthContext'
import ResolveScreen                                        from './screens/ResolveScreen';

const switchNavigator = createSwitchNavigator({
  Resolve: ResolveScreen,
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


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  )
}
