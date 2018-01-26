import React from 'react';
import * as APIUtil from '../../util/api_util';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    return this.props.requestAllPokemon();
  }


  render(){
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={APIUtil.uniqueKey(poke.id)} poke={poke} />
      )
    );
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path='/pokemon/:id' component={PokemonDetailContainer} />
      </section>
    );
  }
}

export default PokemonIndex;
