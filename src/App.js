import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import TheGallery from './components/pages/TheGallery';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/the-gallery' exact component={TheGallery} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
