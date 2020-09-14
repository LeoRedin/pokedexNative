import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'zustand-persist';
import {NavigationContainer} from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Button,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './theme/theme.json';

import NonAuthenticatedApp from './routes/NonAuthenticated';
import AuthenticatedApp from './routes/Authenticated';

import useAuthStore from './stores/auth';

function App() {
  const {isAuthenticated} = useAuthStore();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <PersistGate>
          {isAuthenticated ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
        </PersistGate>
      </ApplicationProvider>
    </>
  );
}

export default App;
