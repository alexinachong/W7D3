import _ from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};

export const selectAllItems = (state) => {
  return _.values(state.entities.items);
};

export const selectSinglePokemon = (state, id) => {
  return state.entities.pokemon[id];
};
