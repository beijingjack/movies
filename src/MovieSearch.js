import React, { Component } from 'react';
import axios from 'axios'
import Movies from './Movies'
import { Button, Input} from 'semantic-ui-react'

class MovieSearch extends Component {
  constructor(){
    super();
    this.state = {
      value: '',
      movies: [],
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.latestClickHandler = this.latestClickHandler.bind(this);
    this.oldestClickHandler = this.oldestClickHandler.bind(this);
    this.baseUrl = 'https://api.themoviedb.org/3/';
  }

  inputChangeHandler(event) {
    this.setState({ value: event.target.value });
    this.searchMovie()
  }

  searchMovie(){
    if(this.state.value === '') {
      return
    }
    let url = `${this.baseUrl}search/movie?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US&query=${this.state.value}&include_adult=false`;
    axios.get(url).then((response) => {
      this.setState({
        movies: response.data.results
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  sortDateClickHandler(i) {
    let movies = this.state.movies;
    movies.sort((a,b) => {
      if (a.release_date<b.release_date) {return i}
      if (a.release_date>b.release_date) {return -i}
      return 0
    });
    this.setState({
      movies: movies
    });
  }

  latestClickHandler(){
    this.sortDateClickHandler(1);
  }
  oldestClickHandler(){
    this.sortDateClickHandler(-1);
  }

  render() {
    window.currentMovies.movies = this.state.movies;
    return (
      <div>
        <h2>Search Movies...</h2>
        <Input icon='search'
               value={this.state.value}
               placeholder='Search Movie Here...'
               onChange={this.inputChangeHandler}
        />
        <Button
          onClick={this.latestClickHandler}>
          Sort From Newest
        </Button>

        <Button onClick={this.oldestClickHandler}>
          Sort From Oldest
        </Button>

        <Movies movies={this.state.movies}/>
      </div>

    );
  }
}

export default MovieSearch;
