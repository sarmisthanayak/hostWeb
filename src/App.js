import React from "react";
import { BrowserRouter,Route, Router, Routes } from "react-router-dom";
import Header from "./Component/Header";
import HeroSection from "./Component/Hero";
import { makeStyles } from "@material-ui/core";
import PricingCardSection from "./Component/Card";
import Advertise from "./Component/Advertisement";
import LoadBalance from "./Component/Content1";
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  root:{
    width: '100%',
    fontFamily: 'sans-serif',
  }
});


const App = () =>{
  const classes = useStyles();

  return(
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <HeroSection />
        <PricingCardSection />
        <Advertise />
        <LoadBalance />
      </div>
    </BrowserRouter>
  );
};

export default App;
