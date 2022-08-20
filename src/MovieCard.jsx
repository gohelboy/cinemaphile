import React from "react";

const MovieCard = ({ movie }) => { 
    return (
        <div className="card">
            <div className="year">
                <p>{movie.Year}</p>
            </div>

            <div className="image">
                <img src={movie.Poster !== 'N/A' ? movie.Poster
                    : 'https://via.placeholder.com/400'}
                    alt={movie.Title} />
            </div>

            <div className="title">
                <p>{movie.Title}</p>
            </div>
        </div>
    );
}

export default MovieCard;