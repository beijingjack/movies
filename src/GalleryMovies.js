import React, { Component } from 'react';
import Movie from "./Movie";

class GalleryMovies extends Component {
	render() {
		//this.props.popularMovies();
		let moviesView;
		const noMovie = this.props.movies.length === 0;
		if (noMovie) {
			console.log('here');
			this.props.popularMovies();
		}
		else{
			moviesView = this.props.movies.map((movie, idx) => {
				console.log(movie);
				return (
					<li key={idx}>
						<Movie movie={movie}/>
					</li>
				)
			});
		}

		return (
			<div>
				{moviesView}
			</div>
		)
	}
}

export default GalleryMovies;