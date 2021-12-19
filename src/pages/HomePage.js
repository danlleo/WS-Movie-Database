import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/styles/HomePage.css";
import HomeMovieItem from "../components/HomeMovieItem";

export default function HomePage() {
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [trendingMovieData, setTrendingMovieData] = useState([]);
  const [topMovieData, setTopMovieData] = useState([]);

  async function getMovieData(category, setData) {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMovieData("popular", setPopularMovieData);
    getMovieData("upcoming", setTrendingMovieData);
    getMovieData("top_rated", setTopMovieData);
  }, []);

  return (
    <main>
      <div className="hp-movies container">
        <div className="hp-movies_more">
          <h2>Popular Movies</h2>
          <Link to="/popular">See More</Link>
        </div>
        <div className="img-container">
          {popularMovieData.slice(0, 4).map((item) => {
            return (
              <HomeMovieItem
                imgLink={item.poster_path}
                imgAlt={item.title}
                movieId={item.id}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
      <div className="hp-movies container">
        <div className="hp-movies_more">
          <h2>Trending Movies</h2>
          <Link to="/trending">See More</Link>
        </div>
        <div className="img-container">
          {trendingMovieData.slice(0, 4).map((item) => {
            return (
              <HomeMovieItem
                imgLink={item.poster_path}
                imgAlt={item.title}
                movieId={item.id}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
      <div className="hp-movies container">
        <div className="hp-movies_more">
          <h2>Top Rated Movies</h2>
          <Link to="/top">See More</Link>
        </div>
        <div className="img-container">
          {topMovieData.slice(0, 4).map((item) => {
            return (
              <HomeMovieItem
                imgLink={item.poster_path}
                imgAlt={item.title}
                movieId={item.id}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
