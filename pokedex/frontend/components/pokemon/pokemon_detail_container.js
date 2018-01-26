import { connect } from 'react-redux';
import { selectSinglePokemon, selectAllItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon, requestAllPokemon } from '../../actions/pokemon_actions';
import { requestAllItems } from '../../actions/items_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    pokemon: selectSinglePokemon(state, id),
    items: selectAllItems(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestAllPokemon: (id) => dispatch(requestAllPokemon(id)),
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
  requestAllItems: (id) => dispatch(requestAllItems(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
