import React from 'react';
import { Link } from "react-router-dom";
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
        <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}



export default MovieList;
