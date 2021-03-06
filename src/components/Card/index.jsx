import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90, 90 ,90)",
    },
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));
function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  const classes = useStyles();
  return (
    <Grid item md={3} xs={12} sm={12}>
      <Link className={classes.link} to={"/pokemon/" + id}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={image} />
          <CardContent>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default PokemonCard;
