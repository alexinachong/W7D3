import React from 'react';
import * as APIUtil from '../../util/api_util';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    return this.props.requestAllPokemon();
  }

  render(){
    return (
      <ul>
        { this.props.pokemon.map(poke => (
          <li key={APIUtil.uniqueKey(poke.id)}>{ poke.name } <img src={ poke.image_url} /> </li>
        )) }
      </ul>
    );
  }
}

export default PokemonIndex;
