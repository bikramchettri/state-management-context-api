import React, { useState, useContext } from 'react';

import { MovieContext } from './MovieContext';
import Movie from './Movie';

const MovieList = () => {
  const movies = useContext(MovieContext);
  return (
    <>
      <h1>MovieList</h1>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};
export default MovieList;
