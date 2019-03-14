import React, { Component } from "react";
import {Route, NavLink, BrowserRouter, Switch} from "react-router-dom";
import MovieSearch from './MovieSearch';
import Gallery from './Gallery';
import MovieDetail from "./MovieDetail";
import './App.css'
import {Button} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Movie</h1>
          <div className="container">
            <Button color="youtube" size="large"><NavLink className="link" to="/">Search</NavLink></Button>
            <Button color="youtube" size="large"><NavLink className="link"  to="/gallery">Gallery</NavLink></Button>
          </div>
          <br/>
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