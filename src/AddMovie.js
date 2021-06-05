import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
export const AddMovie = () => {
  const [movie, setMovie] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);
  function handleMovie(e) {
    setMovie(e.target.value);
  }
  function handlePrice(e) {
    setPrice(e.target.value);
  }
  function addMovie(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={addMovie}>
        <input type="text" onChange={handleMovie} value={movie} />
        <input type="text" onChange={handlePrice} value={price} />
      </form>
    </>
  );
};
