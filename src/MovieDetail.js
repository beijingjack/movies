import React, { Component } from 'react';
import MovieDetailView from './MovieDetailView'
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";

class MovieDetail extends Component{
  constructor() {
    super();
    this.state = {
      movie:[]
    };
    this.baseUrl = 'https://api.themoviedb.org/3/movie/';
  }

  getMovie() {
    let id = this.props.match.params.id;
    let url = `${this.baseUrl}${id}?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US`;
    axios.get(url).then((response) => {
      this.setState({
        movie: response.data
      });
    })
  }

  getNextMovieId() {
    const currentMovies = window.currentMovies.movies;
    const currentId = parseInt(this.props.match.params.id);
    let nextIdx = currentMovies.findIndex((curr) => curr.id===currentId) + 1;
    if (nextIdx === currentMovies.length) {nextIdx = 0}
    return currentMovies[nextIdx].id;
  }

  getPrevMovieId() {
    const currentMovies = window.currentMovies.movies;
    const currentId = parseInt(this.props.match.params.id);
    let prevIdx = currentMovies.findIndex((curr) => curr.id===currentId) - 1;
    if (prevIdx < 0) {prevIdx = currentMovies.length-1}
    return currentMovies[prevIdx].id;
  }

  render() {
    const prevMovieId = this.getPrevMovieId();
    const nextMovieId = this.getNextMovieId();
    return(
      <div>
        <MovieDetailView
          movie={this.state.movie}
          getMovie={() => this.getMovie()}
          id={this.props.match.params.id}
        />
        <br/>
        <Link to={`/detail/${prevMovieId}`}>
          <Button size="big">Prev</Button>
        </Link>
        <Link to={`/detail/${nextMovieId}`}>
          <Button size="big">Next</Button>
        </Link>
      </div>
    )
  }
}

export default MovieDetail