import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import MovieSearch from './MovieSearch';
import Gallery from './Gallery';
import './App.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Movie</h1>
          <ul className="header">
            <li><NavLink exact  to="/">Search Movie</NavLink></li>
            <li><NavLink exact  to="/gallery">Gallery</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={MovieSearch}/>
            <Route exact path="/gallery" component={Gallery}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;