import React, { Component } from 'react';
import axios from "axios";
import GalleryMovies from "./GalleryMovies";

class Gallery extends Component{
	constructor(){
		super();
		this.state = {
			allMovies:[],
			displayedMovies: [],
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
		this.setState({allMovies: movies, displayedMovies:movies});
	}

	filterGenre = (i) => {
		let all = this.state.allMovies;
		let movies = all.filter(movie => movie.genre_ids.includes(i));
		i===999 ? this.setState({displayedMovies: all}) : this.setState({displayedMovies: movies});
	};

	render() {
		return(
			<div>
				<button onClick={() => this.filterGenre(999)}>All</button>
				<button onClick={() => this.filterGenre(28)}>Action</button>
				<button onClick={() => this.filterGenre(12)}>Adventure</button>
				<button onClick={() => this.filterGenre(16)}>Animation</button>
				<button onClick={() => this.filterGenre(35)}>Comedy</button>
				<button onClick={() => this.filterGenre(80)}>Crime</button>
				<button onClick={() => this.filterGenre(99)}>Documentary</button>
				<button onClick={() => this.filterGenre(18)}>Drama</button>
				<button onClick={() => this.filterGenre(10751)}>Family</button>
				<button onClick={() => this.filterGenre(14)}>Fantasy</button>
				<button onClick={() => this.filterGenre(36)}>History</button>
				<button onClick={() => this.filterGenre(27)}>Horror</button>
				<button onClick={() => this.filterGenre(10402)}>Music</button>
				<button onClick={() => this.filterGenre(9648)}>Mystery</button>
				<button onClick={() => this.filterGenre(10749)}>Romance</button>
				<button onClick={() => this.filterGenre(878)}>Science Fiction</button>
				<button onClick={() => this.filterGenre(10770)}>TV Movie</button>
				<button onClick={() => this.filterGenre(53)}>Thriller</button>
				<button onClick={() => this.filterGenre(10752)}>War</button>
				<button onClick={() => this.filterGenre(37)}>Western</button>

				<GalleryMovies
					movies={this.state.allMovies}
					popularMovies={this.popularMovies}
					display={this.state.displayedMovies}
				/>
			</div>
		)
	}
}

export default Gallery