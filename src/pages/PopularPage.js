import React, { useState, useEffect } from "react";
import MovieDiscoveryItem from "../components/MovieDiscoveryItem";
import axios from "axios";
import "../components/styles/MovieItems.css";
import { PuffLoader } from "react-spinners";

export default function PopularPage() {
  const [movieDiscoveryData, setMovieDiscoveryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);

  async function getDiscoveryMovie() {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pages}`
      )
      .then((response) => {
        setMovieDiscoveryData([
          ...movieDiscoveryData,
          ...response.data.results,
        ]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getDiscoveryMovie();
  }, [pages]);

  useEffect(() => {
    getDiscoveryMovie();
  }, []);

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
