import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
