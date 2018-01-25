export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};

export const uniqueKey = (id) => {
  return new Date().valueOf() * id;
};
