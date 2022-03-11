import { TOGGLE_FAVORITE } from "./action";

const initialData = {
  favorites: [],
};

const pokemonRducer = (state = initialData, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      let pokemon = action.payload;
      let pokemonFromFavorite = state.favorites.find(
        (favPokemon) => pokemon.id === favPokemon.id
      );
      return {
        ...state,
        favorites: pokemonFromFavorite
          ? [
              ...state.favorites.filter(
                (pokemon) => pokemon.id !== pokemonFromFavorite.id
              ),
            ]
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default pokemonRducer;
