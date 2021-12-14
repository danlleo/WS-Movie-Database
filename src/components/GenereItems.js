import React, { useState, useEffect } from "react";
import MovieDiscoveryItem from "../components/MovieDiscoveryItem";
import axios from "axios";
import { useParams } from "react-router";
import "../components/styles/MovieItems.css";
import { PuffLoader } from "react-spinners";

export default function GenereItems() {
  const [movieDiscoveryData, setMovieDiscoveryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const { id } = useParams();

  async function getDiscoveryMovie() {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${id}&page=${pages}`
      )
      .then((response) => {
        setMovieDiscoveryData([
          ...movieDiscoveryData,
          ...response.data.results,
        ]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getDiscoveryMovie();
  }, [pages]);

  useEffect(() => {
    getDiscoveryMovie();
  }, [id]);

  return (
    <div className="movie-main">
      <div className="movie-container container">
        <div className="split">
          <h2>Popular Movies</h2>
        </div>

        {movieDiscoveryData.map((item) => {
          return (
            <MovieDiscoveryItem
              key={`${item.id}`}
              movieName={item.title}
              movieDescription={item.overview}
              movieImage={item.backdrop_path}
              movieId={item.id}
            />
          );
        })}
        <div className="btn-container">
          {loading ? (
            <PuffLoader />
          ) : (
            <button onClick={() => setPages(pages + 1)}>Load More</button>
          )}
        </div>
      </div>
    </div>
  );
}
