import React, { Component } from 'react';
import MovieDetailView from './MovieDetailView'
import axios from "axios";

class MovieDetail extends Component{
	constructor() {
		super();
		this.state = {
			id: parseInt(this.props.match.params.id),
			movie:[]
		};
		this.baseUrl = 'https://api.themoviedb.org/3/movie/';
	}

	getMovie() {
		let url = `${this.baseUrl}${this.state.id}?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US`;
		axios.get(url).then((response) => {
			this.setState({
				movie: response.data
			});
		})
	}
	render() {
		return(
			//console.log(this.props.match.params.id) // it is a string
			<MovieDetailView
				movie={this.state.movie}
				getMovie={() => this.getMovie()}
			/>
		)
	}
}

export default MovieDetail