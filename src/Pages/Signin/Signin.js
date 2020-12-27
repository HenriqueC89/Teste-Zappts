import React from "react";
import Login from "../../Components/Login/Login";
import Slider from "../../Components/Slider/Slider";
import Grid from "@material-ui/core/Grid";
import "./Signin.scss";

const Signin = () => {
  return (
    <Grid container>
      <Grid classes="grid__slider" item xs={6}>
        <Slider />
      </Grid>
      <Grid item xs={6}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default Signin;
