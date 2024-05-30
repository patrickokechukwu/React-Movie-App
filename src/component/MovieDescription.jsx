// src/MovieDescription.js

import { useParams, useNavigate } from 'react-dom';
import PropTypes from 'prop-types';

const MovieDescription = ({ movies }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <p>Movie not found</p>;
    }

    // Rest of the code...

    return (
        <div className="movie-description">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailerURL}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

MovieDescription.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MovieDescription;