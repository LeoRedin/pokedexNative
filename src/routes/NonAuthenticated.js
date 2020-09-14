import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../screens';

const {Navigator, Screen} = createStackNavigator();

function NonAuthenticatedNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}

function NonAuthenticatedApp() {
  return (
    <NavigationContainer>
      <NonAuthenticatedNavigator />
    </NavigationContainer>
  );
}

export default NonAuthenticatedApp;
