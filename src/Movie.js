import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


class Movie extends React.Component {
  render() {
    return (
      <Link to={`/detail/${this.props.movie.id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.poster_path}`}
            alt={`${this.props.movie.title}`}
          />
        </div>
      </Link>
    );
  }
}

Movie.propTypes = {
  poster_path: PropTypes.string
};

export default Movie