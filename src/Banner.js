import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Requests';

function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const { data } = await axios({
				method: 'get',
				url: requests.fetchNetflixOriginals,
			});
			setMovie(data['results'][Math.floor(Math.random() * data['results'].length - 1)]);
			return data;
		}
		fetchData();
		return () => {};
	}, []);
	console.log(movie);
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + ' ...' : string;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie['backdrop_path']}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
				<div className="banner__fadeButtom" />
			</div>
		</header>
	);
}

export default Banner;
