import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Pokemon} from '../screens';

const {Navigator, Screen} = createStackNavigator();

function AuthenticatedNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="Pokemon" component={Pokemon} />
    </Navigator>
  );
}

function AuthenticatedApp() {
  return (
    <NavigationContainer>
      <AuthenticatedNavigator />
    </NavigationContainer>
  );
}

export default AuthenticatedApp;
