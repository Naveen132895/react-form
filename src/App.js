import React from 'react';
import Header from './components/header';
import Signup from './components/signup';
import './App.css';
import Home from './components/home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
    <Router>
      <div>
        <Header />
      </div>
      <div className="App">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
