import React, { Component } from 'react';
import axios from 'axios'
import Movies from './Movies'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: '',
      movies: [],
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.popularMovies = this.popularMovies.bind(this);
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
    let url = `${this.baseUrl}search/movie?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US&query=${this.state.value}`;
    axios.get(url).then((response) => {
      this.setState({
        movies: response.data.results
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  popularMovies() {
    let url = `${this.baseUrl}movie/popular?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US`;
    axios.get(url).then((response) => {
      this.setState({
        movies: response.data.results
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    //let popularMovies = this.popularMovies();
    return (
      <div>
        <h2>Search Movies...</h2>
        <input
          value={this.state.value}
          placeholder='Search Movie Here...'
          onChange={this.inputChangeHandler}
        />
        <Movies
          movies={this.state.movies}
          value={this.state.value}
          popularMovies={this.popularMovies}
        />
      </div>

    );
  }
}

export default App;
