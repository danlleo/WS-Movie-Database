import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner container">
        <h1>WS Movie</h1>
        <ul>
          <li>Genere</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Top Rated</li>
        </ul>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}
