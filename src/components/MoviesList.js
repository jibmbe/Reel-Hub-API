import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies/')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            {movies.map(movie => (
                <Movie key={movie.id} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
