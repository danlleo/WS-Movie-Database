import React from "react";
import { Link } from "react-router-dom";

export default function GenerePage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/genere/28">Action</Link>
        </li>
        <li>
          <Link to="/genere/12">Adventure</Link>
        </li>
        <li>
          <Link to="/genere/16">Animation</Link>
        </li>
        <li>
          <Link to="/genere/35">Comedy</Link>
        </li>
        <li>
          <Link to="/genere/80">Crime</Link>
        </li>
        <li>
          <Link to="/genere/99">Documentary</Link>
        </li>
        <li>
          <Link to="/genere/18">Drama</Link>
        </li>
        <li>
          <Link to="/genere/10751">Family</Link>
        </li>
        <li>
          <Link to="/genere/14">Fantazy</Link>
        </li>
        <li>
          <Link to="/genere/36">History</Link>
        </li>
        <li>
          <Link to="/genere/27">Horror</Link>
        </li>
        <li>
          <Link to="/genere/10402">Music</Link>
        </li>
        <li>
          <Link to="/genere/9648">Mystery</Link>
        </li>
        <li>
          <Link to="/genere/10749">Romance</Link>
        </li>
        <li>
          <Link to="/genere/878">Science Fiction</Link>
        </li>
        <li>
          <Link to="/genere/10770">TV Movie</Link>
        </li>
        <li>
          <Link to="/genere/53">Thriller</Link>
        </li>
        <li>
          <Link to="/genere/10752">War</Link>
        </li>
        <li>
          <Link to="/genere/37">Western</Link>
        </li>
      </ul>
    </div>
  );
}
