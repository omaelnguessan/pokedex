import { connect, useSelector } from "react-redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import PokemonCard from "../../components/Card";

const styles = makeStyles((theme) => ({
  pokedexContainer: {
    height: "100vh",
    backgroundColor: "rgb(68, 68, 68)",
    paddingTop: 80,
    textAlign: "center",
  },
}));

function Favorites() {
  const classes = styles();
  const favorites = useSelector((state) => state.favorites);

  return (
    <Box>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {favorites.map((pokemon, index) => {
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              image={pokemon.sprites.front_default}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
