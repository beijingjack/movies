import React, { Component } from 'react';

class MovieDetailView extends Component {
  render() {
    let imageUrl;
    const noMovie = this.props.movie.length === 0;
    if (noMovie) {
      this.props.getMovie();
    }else {
      imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.poster_path}`;
    }
    return(
      //use flex box
      <div>
        <img
          src={imageUrl}
          alt={`${this.props.movie.title}`}
        />
        <h2>Rating : {this.props.movie.vote_average}</h2>
        <h3>{this.props.movie.overview}</h3>
      </div>
    )
  }

}

export default MovieDetailView