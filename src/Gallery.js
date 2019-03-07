import React, { Component } from 'react';
import axios from "axios";

class Gallery extends Component{
	constructor(){
		super();
		this.state = {
			movies: [],
		};
		this.popularMovies = this.popularMovies.bind(this);
		this.baseUrl = 'https://api.themoviedb.org/3/';
	}

	popularMovies() {
		const numberPages = 5;
		const movies = this.state.movies;
		let url = `${this.baseUrl}movie/popular?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US&`;

		for (var i=1; i<=numberPages; i++) {
			let currUrl = `${url}page=${i}`;
		}




		// let url = `${this.baseUrl}movie/popular?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US`;
		// axios.get(url).then((response) => {
		// 	this.setState({
		// 		movies: response.data.results
		// 	});
		// }).catch((error) => {
		// 	console.log(error);
		// });
	}

	render() {
		return(
			<div>

			</div>
		)
	}
}

export default Gallery