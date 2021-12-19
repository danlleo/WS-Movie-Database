import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (input) navigate(`/search/${input}`);
    setInput("");
    setFocus(false);
  }

  return (
    <div className="header">
      <div className="header-inner container">
        <h1>
          <Link to="/">WS Movie</Link>
        </h1>
        {focus ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a movie..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        ) : (
          <ul>
            <li>
              <Link to="/genere">Genre</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
            <li>
              <Link to="/top">Top Rated</Link>
            </li>
          </ul>
        )}
        {focus ? (
          <i className="fas fa-times" onClick={() => setFocus(false)} />
        ) : (
          <i
            className="fas fa-search"
            onClick={() => {
              setFocus(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
