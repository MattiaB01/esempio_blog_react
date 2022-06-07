import React, { useState } from "react";
import "./materialNav.css"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { useStepContext } from "@mui/material";
function MaterialBar(){
    
    const [menu,setMenu] = useState(false);
    
    const [scrolled,setScrolled] =useState(false);
    
    window.addEventListener('scroll', (e) => {  
      setMenu(false); 
    })
    
    return(

<Box sx={{ flexGrow: 1 }}>

<AppBar display='flex' position="static" style={{ /*background: '#2E3B55'*/ background: "#393E46" }} >

  <Toolbar>

  
    <IconButton

      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      
    >

      <MenuIcon onClick={()=>{setMenu(!menu) }}/>
      
    </IconButton>
 

      <div className="typo">
        <Typography className="nome" variant="p" component="div" sx={{ flexGrow: 1 }}>
          MattiaBonfanti
        </Typography>
      </div>
      <div className="rightNav">
        <Link to='/'>

          <Button color="inherit" onClick={()=>{setMenu(false) }} >Home</Button>

        </Link>

        <Link to='/about'>
          <Button color="inherit" onClick={()=>{setMenu(false) }}>About</Button>
        </Link>
        <Link to='/articles-list'>
          <Button color="inherit" onClick={()=>{setMenu(false) }}>Articles</Button>
        </Link>
      </div>
  </Toolbar>
</AppBar>

<div className={menu ? "menu" : "menu2"}>
     <Link to='/'>
     <div className="btn1"  onClick={()=>{setMenu(false) }}>
      HOME
      </div>
      </Link>
      <Link to='/about'>
      <div className="btn1"  onClick={()=>{setMenu(false) }}>
       About
      </div>
      </Link>
    
      <Link to='/articles-list'>
      <div className="btn1"  onClick={()=>{setMenu(false) }}>
      Articles
      </div>
      </Link>
    
      <Link to='/'>
      <div className="btn1"  onClick={()=>{setMenu(false) }}>
      More
      </div>
      </Link>
     </div>
</Box>

    );
    }

export default MaterialBar;