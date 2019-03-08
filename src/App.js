import React, { Component } from "react";
import {Route, NavLink, BrowserRouter, Switch} from "react-router-dom";
import MovieSearch from './MovieSearch';
import Gallery from './Gallery';
import MovieDetail from "./MovieDetail";

class App extends Component {
  render() {
    window.currentMovies = {
      movies: [],
      currentMovieId: -1,
    };
    return (
      <BrowserRouter>
        <div>
          <h1>Movie</h1>
          <ul className="header">
            <li><NavLink exact to="/">Search Movie</NavLink></li>
            <li><NavLink exact to="/gallery">Gallery</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/" component={MovieSearch}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/detail/:id" component={MovieDetail}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;