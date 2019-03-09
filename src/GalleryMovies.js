import React, { Component } from 'react';
import Movie from "./Movie";
import './App.scss'

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

export default GalleryMovies;