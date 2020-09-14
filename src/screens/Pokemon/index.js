import React from 'react';
import {Layout, Text} from '@ui-kitten/components';

function Pokemon({route}) {
  console.log('route', route.params.pokemonId);
  return (
    <Layout>
      <Text>Pokemon</Text>
    </Layout>
  );
}

export {Pokemon};
