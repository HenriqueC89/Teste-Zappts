import React from "react";
import Login from "../../Components/Login/Login";
import Slider from "../../Components/Slider/Slider";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Signin.scss";

const Signin = () => {
  const theme = useTheme();
  const smallView = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      direction={smallView ? "row" : "column"}
      classes={{ container: "grid__container" }}
      container
    >
      <Grid classes={{ item: "grid__item grid__slider" }} item xs={12} sm={6}>
        <Slider />
      </Grid>
      <Grid classes={{ item: "grid__item grid__login" }} item xs={12} sm={6}>
        <h1 className="page__title">Invision</h1>
        <Login />
      </Grid>
    </Grid>
  );
};

export default Signin;
