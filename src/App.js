import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './stylesheets/App.css';
import './stylesheets/starfield.css';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
              <NavLink to="/apps" className="nav-item nav-link">Projects</NavLink>
              <NavLink to="/about" className="nav-item nav-link">About</NavLink>
              <a href={process.env.PUBLIC_URL + '/trandrew-resume.pdf'} className="nav-item nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/apps">
             <Portfolio/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}