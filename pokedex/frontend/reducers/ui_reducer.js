import { merge } from 'lodash';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {

    default:
      return state;
  }
};

export default uiReducer;
