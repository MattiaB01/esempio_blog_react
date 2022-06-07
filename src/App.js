import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wave from "./components/Wave"
import "./components/materialNav.css"

import MaterialBar from "./components/MaterialBar"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';



// Pages
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import Foot from "./components/Bottom";

import Onda from "./components/Wave";

import Nav from "./components/NavBarNew";
// Components
import NavBar from "./components/NavBar";

import background from "./a.jpg";
import { palette } from "@mui/system";
function App() {
  //per settare colore pagina background
  //document.body.style = 'background: #71C9CE;';
  
  document.body.style = 'background: #DBE2EF;';
  
  const lar = window.innerWidth;

  const t = lar < 500 ? true : false;

  return (

    <Router>
      {/* <Nav/> */}

      <MaterialBar/>
      {/* <Wave/> */}

      
      <Switch>

        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/articles-list' component={ArticlesList} />

        <Route exact path='/article/articles-list' component={ArticlesList} />

        <Route exact path='/article/:name' component={Article} />

        <Route component={NotFound} />
      </Switch>
    
      <Foot/>
  
    </Router>
  );

}
export default App;
