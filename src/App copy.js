import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";



// Pages
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import Onda from "./components/Wave";

// Components
import NavBar from "./components/NavBar";

import background from "./a.jpg";
function App() {
  //per settare colore pagina background
  document.body.style = 'background: #71C9CE;';
  
  return (
    <div>
      <Router>
      <div  >
      <NavBar /> //max-w-screen-lg
       <div  >

      <div className='max-w-screen-md mx-auto pt-16'   >
        <Switch>
          <Route exact path='/' component={Home2} />
          <Route exact path='/about' component={About} />
          <Route exact path='/articles-list' component={ArticlesList} />
          <Route exact path='/article/:name' component={Article} />
          <Route component={NotFound} />
        </Switch>
      
      </div>
      </div>
      </div>


<Onda/>
<Footer/>
          </Router>
          </div>
  );
}

const myStyle={
  backgroundColor:'blue',
  backgroundImage:"D:/Projects/NodeJS/mern-blog-front-master/mern-blog-front-master/src/1638902.jpg"
}

export default App;
