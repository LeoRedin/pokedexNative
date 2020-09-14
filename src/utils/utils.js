function convertToPokemonId(id) {
  //  return `#${id.toFixed(2).toString().replace('.', '')}`
  let convertedId;

  // eslint-disable-next-line no-negated-condition
  if (typeof id !== 'string') convertedId = id.toString();
  else convertedId = id;

  return `#${convertedId.padStart(3, '0')}`;
}

export {convertToPokemonId};
