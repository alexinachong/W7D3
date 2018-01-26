import React from 'react';
import * as APIUtil from '../../util/api_util';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => {
  const poke = props.poke;
  const pokeLink = `/pokemon/${poke.id}`;
  return (
    <li key={APIUtil.uniqueKey(poke.id)}>
      <Link to={pokeLink}>
        { poke.name }
        <img src={ poke.image_url} />
    </Link>
    </li>
  );
};
