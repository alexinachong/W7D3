import * as APIUtil from '../util/api_util.js';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_SINGLE_ITEM = 'RECEIVE_SINGLE_ITEM';

export const receiveAllItems = (items) => {
  return ({
    type: RECEIVE_ALL_ITEMS,
    items
  });
};

export const receiveSingleItem = (item) => {
  return ({
    type: RECEIVE_SINGLE_ITEM,
    item
  });
};

export const requestAllItems = () => (dispatch) => (
  APIUtil.fetchAllItems()
  .then(items => dispatch(receiveAllItems(items)))
);

export const requestSingleItem = (id) => (dispatch) => (
  APIUtil.fetchSingleItem(id)
  .then(item => dispatch(receiveSingleItem(item)))
);
