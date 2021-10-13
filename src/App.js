import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import TheGallery from './components/pages/TheGallery';
import ThePiece from './components/pages/ThePiece';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/the-gallery' exact component={TheGallery} />
          <Route path="/the-gallery/:urlid"  exact component={ThePiece} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
