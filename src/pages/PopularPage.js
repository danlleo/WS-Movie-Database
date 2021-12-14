import React from "react";
import { Link } from "react-router-dom";
import MovieDiscoveryItem from "../components/MovieDiscoveryItem";
import "../components/styles/MovieItems.css";

export default function PopularPage() {
  return (
    <div className="movie-main">
      <div className="movie-container container">
        <div className="movie-container_movies-item">
          <Link to="#">
            <img
              class="img-category"
              src="https://www.themoviedb.org/t/p/w780/h8C7KZwCJO5DN7jPifc7AoIjx7k.jpg"
              alt="up"
            />
          </Link>
          <div className="movie-container_movies-item_description">
            <Link to="#" className="link-title">
              <h2>UP Animation Movie</h2>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
              amet libero interdum, convallis sapien vel, ornare nulla.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec malesuada libero suscipit purus
              tincidunt sagittis. Nulla gravida ante sit amet libero bibendum
              fermentum.
            </p>

            <Link to="#" className="link-more">
              See more
            </Link>
          </div>
        </div>
        <div className="movie-container_movies-item">
          <Link to="#">
            <img
              class="img-category"
              src="https://cdn.mos.cms.futurecdn.net/2NBcYamXxLpvA77ciPfKZW-1200-80.jpg"
              alt="up"
            />
          </Link>
          <div className="movie-container_movies-item_description">
            <Link to="#" className="link-title">
              <h2>The Dark Khight</h2>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
              amet libero interdum, convallis sapien vel, ornare nulla.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec malesuada libero suscipit purus
              tincidunt sagittis. Nulla gravida ante sit amet libero bibendum
              fermentum.
            </p>

            <Link to="#" className="link-more">
              See more
            </Link>
          </div>
        </div>
        <div className="movie-container_movies-item">
          <Link to="#">
            <img
              class="img-category"
              src="https://cinemadetective.com/wp-content/uploads/2020/05/forrest-gump.jpg"
              alt="up"
            />
          </Link>
          <div className="movie-container_movies-item_description">
            <Link to="#" className="link-title">
              <h2>Forest Gump</h2>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
              amet libero interdum, convallis sapien vel, ornare nulla.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec malesuada libero suscipit purus
              tincidunt sagittis. Nulla gravida ante sit amet libero bibendum
              fermentum.
            </p>

            <Link to="#" className="link-more">
              See more
            </Link>
          </div>
        </div>
        <div className="btn-container">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
}
