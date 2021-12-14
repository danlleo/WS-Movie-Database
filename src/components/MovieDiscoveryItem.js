import React from "react";
import { Link } from "react-router-dom";

export default function MovieDiscoveryItem({
  movieName,
  movieDescription,
  movieImage,
  movieId,
}) {
  return (
    <div className="movie-container_movies-item">
      <Link to={`/movie/${movieId}`}>
        <img
          className="img-category"
          src={`https://image.tmdb.org/t/p/w1280/${movieImage}`}
          alt="up"
        />
      </Link>
      <div className="movie-container_movies-item_description">
        <Link to={`/movie/${movieId}`} className="link-title">
          <h2>{movieName}</h2>
        </Link>
        <p>{movieDescription}</p>

        <Link to={`/movie/${movieId}`} className="link-more">
          See more
        </Link>
      </div>
    </div>
  );
}
