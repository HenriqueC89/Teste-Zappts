import React, { useState } from "react";
import Register from "../../Components/Register/Register";
import Slider from "../../Components/Slider/Slider";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Signup.scss";

const Signup = () => {
  const theme = useTheme();
  const smallView = useMediaQuery(theme.breakpoints.up("sm"));
  const [loginForm, setLoginForm] = useState(true);

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
        <Register />
      </Grid>
    </Grid>
  );
};

export default Signup;
