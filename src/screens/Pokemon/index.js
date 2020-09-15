import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const isAndroid = Platform.OS === 'android';

function Pokemon({route}) {
  console.log('route', route.params.pokemonId);
  return (
    <>
      {isAndroid && (
        <StatusBar hidden backgroundColor="#eb4971" barStyle="dark-content" />
      )}
      <Layout>
        <Text>Pokemon</Text>
      </Layout>
    </>
  );
}

export {Pokemon};
