import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import SimilarMovies from "../components/SimilarMovies";
import { PuffLoader } from "react-spinners";
import "../components/styles/MoviePage.css";

export default function MoviePage() {
  const [movieData, setMovieData] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  async function getMovieData() {
    setLoading(true);

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setSimilarMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getMovieData();
  }, [id]);

  return (
    <div className="moviepage-container">
      {loading ? (
        <PuffLoader />
      ) : (
        <>
          <div className="moviepage-item container">
            <div className="moviepage-item_left">
              <img
                className="moviepage-poster"
                src={`https://image.tmdb.org/t/p/w342/${movieData.poster_path}`}
                alt="spider-man"
              />
              <button>Watch Trailer</button>
            </div>
            <div className="moviepage-item_right">
              <div>
                <div className="moviepage-item_right-info">
                  <h1>{movieData.title}</h1>
                  <p>‟{movieData.tagline}”</p>
                  <p>{movieData.overview}</p>
                </div>
                <div className="moviepage-item_right-about">
                  <h2>About Movie</h2>
                  <div className="moviepage-item_right-about_table">
                    <div className="table-item">
                      <div className="table-item_key">Year</div>
                      <div className="table-item_value">2021</div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Country</div>
                      <div className="table-item_value">USA, France</div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Genere</div>
                      <div className="table-item_value">
                        Fantasy, Action, Adventure
                      </div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Revenue</div>
                      <div className="table-item_value">200.000.000$</div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Runtime</div>
                      <div className="table-item_value">2h 15h</div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Rating</div>
                      <div className="table-item_value">7.6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="similar-movies container">
            <h2>More Like This</h2>
            <div className="similar-movies_items">
              {similarMovies.slice(0, 6).map((item) => {
                return (
                  <SimilarMovies
                    name={item.title}
                    imgLink={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                    id={item.id}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
