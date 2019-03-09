import React, { Component } from 'react';
import Movie from "./Movie";

class Movies extends Component {
  render() {
    let moviesView;
    const noMovie = this.props.movies.length === 0;
    if(!noMovie){
      moviesView = this.props.movies.map((movie, idx) => {
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

export default Movies