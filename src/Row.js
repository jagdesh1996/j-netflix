import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

function Row(props) {
	const { title, fetchUrl, isLargeRow = false } = props;
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const { data } = await axios({
				method: 'get',
				url: fetchUrl,
			});
			setMovies(data['results']);
			return data;
		}
		fetchData();
		return () => {};
	}, [fetchUrl]);
	console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => {
					return (
						((isLargeRow && movie['poster_path']) ||
							(!isLargeRow && movie['backdrop_path'])) && (
							<div key={movie.id} className="row__single__poster">
								<img
									className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
									key={movie['id']}
									src={`https://image.tmdb.org/t/p/original${
										isLargeRow ? movie?.['poster_path'] : movie?.['backdrop_path']
									}`}
									alt={movie?.title || movie?.name || movie?.original_name}
								/>
								{/* <div className="poster__btnView">
									<button>View</button>
								</div> */}
								<div className="poster__name">
									<h6>{movie?.title || movie?.name || movie?.original_name}</h6>
								</div>
							</div>
						)
					);
				})}
			</div>

			{/* <div className="row__posters">
				{movies.map((movie) => {
					return (
						((isLargeRow && movie['poster_path']) ||
							(!isLargeRow && movie['backdrop_path'])) && (
							<React.Fragment>
								<img
									className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
									key={movie['id']}
									src={`https://image.tmdb.org/t/p/original${
										isLargeRow ? movie?.['poster_path'] : movie?.['backdrop_path']
									}`}
									alt={movie['name']}
								/>
								<div className="poster__name">
									<h6>{movie?.title || movie?.name || movie?.original_name}</h6>
								</div>
							</React.Fragment>
						)
					);
				})}
			</div> */}
		</div>
	);
}

export default Row;
