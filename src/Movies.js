import React, { Component } from 'react';
import Movie from "./Movie";

class Movies extends Component {
	render() {
		// if the props.movies is empty, display the popular movie list
		//check if props.movies is empty, which means there's no search yet
		const noMovie = this.props.movies.length === 0;

		let moviesView;
		if(noMovie) {
			console.log('here');
			this.props.popularMovies();
		} else {
			moviesView = this.props.movies.map((movie, idx) => {
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

export default Movies