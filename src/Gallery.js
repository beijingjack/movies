import React, { Component } from 'react';
import axios from "axios";
import GalleryMovies from "./GalleryMovies";

class Gallery extends Component{
	constructor(){
		super();
		this.state = {
			movies: [],
		};
		this.popularMovies = this.popularMovies.bind(this);
		this.baseUrl = 'https://api.themoviedb.org/3/';
	}

	async popularMovies() {
		let url = `${this.baseUrl}movie/popular?api_key=57597e10d2a4be7b31ce5f3098929194&language=en-US&`;
		let moviePages = [];
		let movies = [];
		moviePages.push(await axios.get(`${url}page=1`).then((response) => response.data.results));
		moviePages.push(await axios.get(`${url}page=2`).then((response) => response.data.results));
		moviePages.push(await axios.get(`${url}page=3`).then((response) => response.data.results));
		moviePages.push(await axios.get(`${url}page=4`).then((response) => response.data.results));
		moviePages.push(await axios.get(`${url}page=5`).then((response) => response.data.results));
		for (const page of moviePages) {page.map(movie => movies.push(movie))}
		this.setState({movies: movies});
	}

	render() {
		return(
			<div>
				<GalleryMovies movies={this.state.movies} popularMovies={this.popularMovies}/>
			</div>
		)
	}
}

export default Gallery