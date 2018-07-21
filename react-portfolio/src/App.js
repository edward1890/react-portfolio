import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import nav from './components/nav';
import './App.css';

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
