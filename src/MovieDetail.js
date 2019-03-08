import React, { Component } from 'react';
import MovieDetailView from './MovieDetailView'
import axios from "axios";

class MovieDetail extends Component{
	constructor() {
		super();
		this.state = {
			movie:[]
		};
		this.baseUrl = 'https://api.themoviedb.org/3/movie/';
	}

	getMovie() {
		let id = this.props.match.params.id;
		let url = `${this.baseUrl}${id}?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US`;
		axios.get(url).then((response) => {
			this.setState({
				movie: response.data
			});
		})
	}

	render() {
		return(
			<MovieDetailView
				movie={this.state.movie}
				getMovie={() => this.getMovie()}
			/>
		)
	}
}

export default MovieDetail