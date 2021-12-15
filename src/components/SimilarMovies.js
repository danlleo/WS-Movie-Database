import React from "react";
import { Link } from "react-router-dom";

export default function SimilarMovies({ name, imgLink, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <img className="similar-movies_img" src={imgLink} alt={name} />
    </Link>
  );
}
