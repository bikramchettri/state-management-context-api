import React, { useContext, useState, useRef } from 'react';
import { MovieContext } from './MovieContext';
export const AddMovie = () => {
  const inputfield = useRef(null);
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
    if (movie && price) {
      setMovies([
        ...movies,
        {
          id: new Date().getTime().toString(),
          name: movie,
          price: `$ ${price}`
        }
      ]);
      setMovie('');
      setPrice('');
      inputfield.current.blur();
    }
  }
  return (
    <>
      <form onSubmit={addMovie}>
        <input
          type="text"
          onChange={handleMovie}
          value={movie}
          ref={inputfield}
        />
        <input
          type="text"
          onChange={handlePrice}
          value={price}
          ref={inputfield}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
