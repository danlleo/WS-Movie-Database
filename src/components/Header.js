import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner container">
        <h1>
          <Link to="/">WS Movie</Link>
        </h1>
        <ul>
          <li>
            <Link to="/genere">Genere</Link>
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
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}
