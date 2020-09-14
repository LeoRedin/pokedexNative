import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '@ui-kitten/components';

import {convertToPokemonId} from '../../utils/utils';
import {colors} from '../../theme/colors';
import {badges} from '../../assets/badges';

const CONTAINER = (types) => ({
  width: '100%',
  backgroundColor: colors.backgrounds[types[0].type.name],
  width: 330,
  height: 115,
  position: 'relative',
  margin: 20,
  padding: 10,
  borderRadius: 10,
});

const ID = {
  fontWeight: 'bold',
  color: 'rgba(23, 23, 27, 0.6)',
  fontSize: 18,
};

const NAME = {
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontSize: 20,
  color: '#fff',
  marginVertical: 10,
};

const IMAGE = {
  position: 'absolute',
  top: 0,
  right: 15,
};

function PokeCard({
  id = 3,
  name = 'Charmander',
  types = [{type: {name: 'fire'}}],
  image,
}) {
  return (
    <View style={CONTAINER(types)}>
      <Text style={ID}>{convertToPokemonId(id)}</Text>
      <Text style={NAME}>{name}</Text>
      <View>
        {types.map((type) => (
          <View key={`${name}-badge-${type.type.name}`}>
            <Text>Tipo</Text>
          </View>
        ))}
      </View>
      <View style={IMAGE}>
        <Text>Imagem do Poke</Text>
      </View>
    </View>
  );
}

export {PokeCard};
