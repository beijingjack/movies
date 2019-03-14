import React, { Component } from 'react';
import {Rating} from "semantic-ui-react";
import PropTypes from 'prop-types';


class MovieDetailView extends Component {
  render() {
    let imageUrl;
    const noMovie = this.props.movie.length === 0;
    if (!noMovie) {
      imageUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.poster_path}`;
    }
    return(
      //use flex box
      <div>
        <img
          src={imageUrl}
          alt={`${this.props.movie.title}`}
        />
        <h2>Popularity : {this.props.movie.popularity}</h2>
        <h2>{this.props.movie.overview}</h2>

        <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />

      </div>
    )
  }

}

MovieDetailView.propTypes = {
  poster_path: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  popularity: PropTypes.number
};

export default MovieDetailView