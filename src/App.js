import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Component/Header";
import { makeStyles } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu2Section from "./Pages/Menu2";
import Menu3Section from "./Pages/Menu3";
import Menu1Section from "./Pages/Menu1";

const useStyles = makeStyles({
  root:{
    width: '100%',
    fontFamily: 'sans-serif',
  }
});


const App = () =>{
  const classes = useStyles();

  return(
    <Router>
      <div className={classes.root}>
        <Header />
        <Routes>
        <Route path="/menu1" element={<Menu1Section/>}/>
        <Route path="/menu2" element={<Menu2Section/>} />
        <Route path="/menu3" element={<Menu3Section/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
