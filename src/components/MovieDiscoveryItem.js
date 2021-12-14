import React from "react";
import { Link } from "react-router-dom";

export default function MovieDiscoveryItem({
  movieName,
  movieDescription,
  movieId,
}) {
  return (
    <div className="movie-container_movies-item">
      <Link to={`/movie/${movieId}`}>
        <img
          class="img-category"
          src="https://www.themoviedb.org/t/p/w780/h8C7KZwCJO5DN7jPifc7AoIjx7k.jpg"
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
