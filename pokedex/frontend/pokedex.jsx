import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { receiveSinglePokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchSinglePokemon } from './util/api_util';
import { receiveAllItems, requestAllItems, receiveSingleItem, requestSingleItem } from './actions/items_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.requestSinglePokemon = requestSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.receiveAllItems = receiveAllItems;
  window.requestAllItems = requestAllItems;
  window.receiveSingleItem = receiveSingleItem;
  window.requestSingleItem = requestSingleItem;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});
