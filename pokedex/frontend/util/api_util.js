export const uniqueKey = (id) => {
  return new Date().valueOf() * id;
};

export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};

export const fetchSinglePokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  });
};

export const fetchAllItems = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/items'
  });
};

export const fetchSingleItem = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/items/${id}`
  });
};
