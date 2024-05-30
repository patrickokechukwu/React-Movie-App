// src/App.js
import { useState } from 'react';
import { Routes, Route } from 'react-dom';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import MovieDescription from './component/MovieDescription';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller",
    posterURL: "https://image-url.com/inception",
    rating: 8.8,
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  // Add more sample movies if needed
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const filterMovies = ({ title, rating }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <Filter onFilter={filterMovies} />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;