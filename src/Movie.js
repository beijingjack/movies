import React from 'react';

class Movie extends React.Component {
	render() {
		return (
			<div>
				<figure>
					<img
						src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.movie.poster_path}`}
						alt={`${this.props.movie.title}`}
					/>
					<figcaption>
						<h2>{this.props.movie.title}</h2>
					</figcaption>
				</figure>
			</div>
		);
	}
}

export default Movie