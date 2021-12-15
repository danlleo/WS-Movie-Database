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
  const { name } = useParams();

  async function getDiscoveryMovie() {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=${pages}&include_adult=false`
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
  }, [name]);

  return (
    <div className="movie-main">
      <div className="movie-container container">
        <div className="split">
          <h2>Search results: {name}</h2>
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
