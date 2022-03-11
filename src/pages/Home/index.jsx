import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../../config";
import PokemonCard from "../../components/Card";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "80px 10px 0px 10px",
    backgroundColor: "rgb(68, 68, 68)",
  },
}));

function Home() {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          let id = index + 1;
          let pokemonObject = {
            id: id,
            url: IMAGE_API_URL + id + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  if (pokemonData) {
    return (
      <Box>
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                image={pokemon.url}
              />
            );
          })}
        </Grid>
      </Box>
    );
  } else {
    return <CircularProgress style={{ marginTop: 100 }} />;
  }
}

export default Home;
