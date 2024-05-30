// src/components/MovieList.js

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieList;