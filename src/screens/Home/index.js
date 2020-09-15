import React from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {Layout, Button, Text} from '@ui-kitten/components';

import useAuthStore from '../../stores/auth';
import {PokeCard} from '../../components';

const LAYOUT = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

function Home({navigation}) {
  const [pokemons, setPokemons] = React.useState([
    {
      id: 1,
      name: 'bulbassaur',
      types: [{type: {name: 'grass'}}],
    },
    {
      id: 2,
      name: 'ivysaur',
      types: [{type: {name: 'grass'}}],
    },
    {
      id: 3,
      name: 'venusaur',
      types: [{type: {name: 'grass'}}],
    },
    {
      id: 4,
      name: 'charmander',
      types: [{type: {name: 'fire'}}],
    },
    {
      id: 7,
      name: 'squirtle',
      types: [{type: {name: 'water'}}],
    },
  ]);
  const [loading, setLoading] = React.useState(false);

  const {logout} = useAuthStore();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Pokemon', {
          pokemonId: item.id,
        })
      }>
      <PokeCard {...item} />
    </TouchableOpacity>
  );

  return (
    <Layout style={LAYOUT}>
      {loading ? (
        <View>
          <Text> Loading ... </Text>
        </View>
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={renderItem}
        />
      )}
    </Layout>
  );
}

export {Home};
