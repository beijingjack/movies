import React, { Component } from 'react';
import Movie from "./Movie";
import './App.scss'
import PropTypes from 'prop-types';

class GalleryMovies extends Component {
  render() {
    let moviesView;
    const noMovie = this.props.movies.length === 0;
    if (noMovie) {
      this.props.popularMovies();
    }
    else{
      moviesView = this.props.display.map((movie, idx) => {
        return (
          <li key={idx}>
            <Movie movie={movie}/>
          </li>
        )
      });
    }

    return (
      <div className="container">
        {moviesView}
      </div>
    )
  }
}

GalleryMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  display: PropTypes.arrayOf(PropTypes.object)
};

export default GalleryMovies;