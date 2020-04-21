import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import axios from 'axios'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);

  
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path="/movies/:id">
            <Movie addToSavedList={addToSavedList} />
          </Route>
          <Route path="/">
            <MovieList movies={movies} />
          </Route>
        </Switch>
        </div>
    </div>
  );
};

export default App;
