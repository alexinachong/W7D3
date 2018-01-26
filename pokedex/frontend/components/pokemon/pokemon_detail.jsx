import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.requestSinglePokemon(id);
  }

  render() {
    console.log(this.props.pokemon);
    if (this.props.pokemon) {
    return (
      <div>
        <h1>HAHAHAHAHA</h1>
        <img src={this.props.pokemon.image_url} />

        <ul>
          <li>Name: {this.props.pokemon.name}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Type: {this.props.pokemon.poke_type}</li>
          <li>Moves: {this.props.pokemon.moves}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
  }
}

export default PokemonDetail;
