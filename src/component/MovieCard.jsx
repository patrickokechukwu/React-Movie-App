// src/components/MovieCard.js

import { Link } from 'react-dom';

import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt={`${movie.title} poster`} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>More Details</Link>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCard;