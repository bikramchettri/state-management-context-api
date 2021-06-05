import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 4512
    },
    {
      name: 'Game of Thrones',
      price: '$15',
      id: 4512678
    },
    {
      name: 'Inception',
      price: '$20',
      id: 1235641
    }
  ]);
  return (
    <>
      <h1>MovieList</h1>
    </>
  );
};
export default MovieList;
