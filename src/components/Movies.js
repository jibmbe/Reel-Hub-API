import React from 'react';

const Movie = ({ title, genre, director, year, description }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Director:</strong> {director}</p>
            <p><strong>Year:</strong> {year}</p>
            <p>{description}</p>
        </div>
    );
};

export default Movie;
