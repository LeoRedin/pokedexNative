import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens';

const {Navigator, Screen} = createStackNavigator();

function NonAuthenticatedNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

function AuthenticatedApp() {
  return (
    <NavigationContainer>
      <NonAuthenticatedNavigator />
    </NavigationContainer>
  );
}

export default AuthenticatedApp;
