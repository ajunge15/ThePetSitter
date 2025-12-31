import Button from "@mui/material/Button";
import HomeImage from "./../../assets/cartoonOfDogs.png";
import "./../../styles.css";
import Cards from "./Cards";
import CatPic from "./../../assets/cats_small.jpg";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoe from "./../../assets/zoe.jpg";
import Peyton from "./../../assets/peyton.jpg";
import RemmiBow from "./../../assets/Remmi-Bow.jpg";
import Crazy from "./../../assets/Shitzus.jpg";
import George from "./../../assets/George.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 500,
    minHeight: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    height: "50%",
    height: "50%",
    padding: 0,
    margin: 0,
  },
  name: {
    fontSize: "30px",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className="width">
      <div className="color-code">
        <img alt="hi" src={HomeImage} class="home-img"></img>
      </div>
      <div className="color-block2">
        <h2 style={{ textAlign: "center" }}>Meet my friends!</h2>
        <Grid container spacing={4} height={400}>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={George}
              name="George the Corgi"
              desc="A snuggly corgi"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards image={Zoe} name="Zoe the Pitbull" desc="A loving pitbull" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Peyton}
              name="Peyton the golden retriever"
              desc="A tug of war champion"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={RemmiBow}
              name="Remmi and Bowski"
              desc="The old chihuahuas"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={Crazy}
              name="Crazy Shih Tzus"
              desc="The crazy puppies"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              image={CatPic}
              name="Mabel and Dipper"
              desc="Cute black cats"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
