import { RECEIVE_ALL_ITEMS, RECEIVE_SINGLE_ITEM } from '../actions/items_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items;
    case RECEIVE_SINGLE_ITEM:
      const newItem = {[action.item.id]: action.item};
      newState = merge({}, state);
      newState = merge(newState, newItem);
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
