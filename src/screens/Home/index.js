import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

import useAuthStore from '../../stores/auth';

import {PokeCard} from '../../components';

const LAYOUT = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Home() {
  const {logout} = useAuthStore();

  return (
    <Layout style={LAYOUT}>
      <PokeCard />
      <Button onPress={logout}>SAIR</Button>
    </Layout>
  );
}

export {Home};
