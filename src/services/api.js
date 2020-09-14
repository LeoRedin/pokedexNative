import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

async function getInitialPokemons() {
  try {
    const responseData = await api.get('/pokemon');
    return {
      success: true,
      pokemons: [...responseData.data.results],
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export {api, getInitialPokemons};
