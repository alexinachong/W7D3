import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_SINGLE_POKEMON:
      const newPoke = {[action.pokemon.pokemon.id]: action.pokemon.pokemon};
      console.warn(newPoke);
      newState = merge({}, state);
      newState = merge(newState, newPoke);
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
