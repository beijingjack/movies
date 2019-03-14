import React, { Component } from 'react';
import Movie from "./Movie";
import PropTypes from 'prop-types';


class Movies extends Component {
  render() {
    let moviesView;
    const noMovie = this.props.movies.length === 0;
    if(!noMovie){
      moviesView = this.props.movies.map((movie, idx) => {
        return (
          <li key={idx}>
            <Movie
              movie={movie}
              movies={this.props.movies}
            />
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

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default Movies