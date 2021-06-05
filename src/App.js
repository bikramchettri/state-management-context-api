import React from 'react';
import { MovieProvider } from './MovieContext';
import Nav from './Nav';
import { AddMovie } from './AddMovie';
import MovieList from './MovieList';
import './style.css';

export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
