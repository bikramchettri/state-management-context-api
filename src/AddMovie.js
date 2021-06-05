import React, { useContext, useState, useRef } from 'react';
import { MovieContext } from './MovieContext';
export const AddMovie = () => {
  const initialValues = {
    movie: '',
    price: ''
  };
  const inputfield = useRef(null);
  const [values, setValues] = useState(initialValues);
  // const [movie, setMovie] = useState('');
  // const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);
  // function handleMovie(e) {
  //   setMovie(e.target.value);
  // }
  // function handlePrice(e) {
  //   setPrice(e.target.value);
  // }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function addMovie(e) {
    e.preventDefault();
    if (values.movie && values.price) {
      setMovies([
        ...movies,
        {
          id: new Date().getTime().toString(),
          name: values.movie,
          price: `$ ${values.price}`
        }
      ]);
      // setMovie('');
      // setPrice('');
      setValues(initialValues);
      inputfield.current.blur();
    }
  }
  return (
    <>
      <form onSubmit={addMovie}>
        <input
          type="text"
          onChange={handleInputChange}
          value={values.movie}
          ref={inputfield}
          name="movie"
        />
        <input
          type="text"
          onChange={handleInputChange}
          value={values.price}
          ref={inputfield}
          name="price"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
