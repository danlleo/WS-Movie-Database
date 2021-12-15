import React from "react";
import { Link } from "react-router-dom";

export default function HomeMovieItem({ imgLink, imgAlt, movieId }) {
  return (
    <Link to={`/movie/${movieId}`}>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${imgLink}`}
        alt={imgAlt}
        className="imgs"
      />
    </Link>
  );
}
