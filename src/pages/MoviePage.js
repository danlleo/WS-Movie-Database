/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import SimilarMovies from "../components/SimilarMovies";
import { PuffLoader } from "react-spinners";
import "../components/styles/MoviePage.css";

export default function MoviePage() {
  const [movieData, setMovieData] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [country, setCountry] = useState("");
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  const convertToReadableNumber = (number) => {
    let HRNumbers = require("human-readable-numbers");
    return HRNumbers.toHumanString(number);
  };

  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = Math.round(mins % 60);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}h ${m}m`;
  };

  async function getMovieData() {
    setLoading(true);

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setMovieData(response.data);
        setCountry(response.data.production_countries[0].name);
        setGenres(response.data.genres);
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

  async function getTrailer() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setTrailer(
          `https://www.youtube.com/watch?v=${response.data.results[0].key}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMovieData();
    getTrailer();
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
                src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`}
                alt="spider-man"
              />
              <a href={trailer} target="_blank">
                <button>Watch Trailer</button>
              </a>
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
                      <div className="table-item_key">Release Date</div>
                      <div className="table-item_value">
                        {movieData.release_date}
                      </div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Country</div>
                      <div className="table-item_value">{country}</div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Genere</div>
                      <div className="table-item_value">
                        {genres.map((item) => {
                          return (
                            <Link
                              to={`/genere/${item.id}`}
                            >{`${item.name} `}</Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Revenue</div>
                      <div className="table-item_value">
                        {convertToReadableNumber(movieData.revenue)} $
                      </div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Runtime</div>
                      <div className="table-item_value">
                        {convertMinsToHrsMins(movieData.runtime)}
                      </div>
                    </div>
                    <div className="table-item">
                      <div className="table-item_key">Rating</div>
                      <div className="table-item_value">
                        {movieData.vote_average}
                      </div>
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
                    key={item.title}
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
