import React, { Component } from 'react';
import MovieDetailView from './MovieDetailView'
import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import PropTypes from 'prop-types';


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

  componentDidMount() {
    this.getMovie();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.getMovie();
    }
  }

  getNextMovieId() {
    const currentMovies = this.props.location.state.movies;
    const currentId = parseInt(this.props.match.params.id);
    let nextIdx = currentMovies.findIndex((curr) => curr.id===currentId) + 1;
    if (nextIdx === currentMovies.length) {nextIdx = 0}
    return currentMovies[nextIdx].id;
  }

  getPrevMovieId() {
    const currentMovies = this.props.location.state.movies;
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
        <Link to={{
          pathname:`/detail/${prevMovieId}`,
          state: {movies:this.props.location.state.movies}
        }}>
          <Button size="big">Prev</Button>
        </Link>
        <Link to={{
          pathname:`/detail/${nextMovieId}`,
          state: {movies:this.props.location.state.movies}
        }}>
          <Button size="big">Next</Button>
        </Link>
      </div>
    )
  }
}

MovieDetailView.propTypes = {
  id: PropTypes.string
};

export default MovieDetail