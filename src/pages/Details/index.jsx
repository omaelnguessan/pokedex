import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { POKEMON_API_URL } from "../../config";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = makeStyles((theme) => ({
  pokedexContainer: {
    height: "84vh",
    backgroundColor: "black",
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 30,
  },
  textTitle: {
    textTransform: "upperCase",
    fontFamily: "Fantasy",
  },
  pokemonImg: {
    width: "170px",
    height: "170px",
  },
  pokemonInfoContainer: {
    bottom: 60,
    position: "absolute",
    width: "100%",
  },
  seperator: {
    height: "0.01mm",
    width: "95%",
  },
  favorite: {
    height: 50,
    width: 50,
    margin: 15,
  },
  text: {},
}));

function Details(props) {
  const classes = styles();
  const [pokemon, setPokemon] = useState([]);
  const param = useParams();

  useEffect(() => {
    const id = param?.id;
    axios.get(POKEMON_API_URL + "/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setPokemon(response.data);
      }
    });
  }, []);

  if (pokemon.length !== 0) {
    let { name, sprites, height, weight, types } = pokemon;

    return (
      <Box>
        <Box className={classes.pokedexContainer}>
          <Typography className={classes.textTitle} variant="h1">
            {name}
          </Typography>
          <img
            className={classes.pokemonImg}
            src={sprites.front_default}
            alt={name}
          />
          <Box className={classes.pokemonInfoContainer}>
            <hr className={classes.seperator} />
            <Grid container>
              <Grid item md={1}>
                <Button className={classes.favorite}>
                  <FavoriteIcon style={{ color: "white", fontSize: 50 }} />
                </Button>
              </Grid>
              <Grid item md={2}>
                <Typography className={classes.text}>
                  Name <br /> {name}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography className={classes.text}>
                  Height <br /> {height}m
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography className={classes.text}>
                  Weight <br /> {weight}Kg
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography className={classes.text}>
                  Type <br />
                  {types.map((pokemonType) => {
                    const { name, slote } = pokemonType.type;
                    return <span key={`${slote}${name}`}> {name} </span>;
                  })}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return <CircularProgress style={{ marginTop: 100 }} />;
  }
}

export default Details;
