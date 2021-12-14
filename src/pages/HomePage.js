import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/HomePage.css";

export default function HomePage() {
  return (
    <main>
      <div className="main-title container">
        <h1>Spider-Man 2</h1>
        <p>2004 • Action | Adventure | Fantasy • 2 Hours</p>
        <p>
          Peter Parker is going through a major identity crisis. Burned out from
          being Spider-Man, he decides to shelve his superhero alter ego, which
          leaves the city suffering in the wake of carnage left by the evil Doc
          Ock. In the meantime, Parker still can't act on his feelings for Mary
          Jane Watson, a girl he's loved since childhood. A certain anger begins
          to brew in his best friend Harry Osborn as well...
        </p>
        <p>Release date: 12 December 2004</p>
        <button>
          Watch Trailer <i className="fas fa-play" />
        </button>
      </div>
      <div className="hp-movies container">
        <div className="hp-movies_more">
          <h2>Popular Movies</h2>
          <Link to="/popular">See More</Link>
        </div>
        <div className="img-container">
          <img
            src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/the-lion-king-future-king-i73599.jpg"
            alt="Lion King"
            className="imgs"
          />
          <img
            src="https://mypostercollection.com/wp-content/uploads/2018/07/Finding-Dory-Printable-Posters-MyPosterCollection.com-1.jpg"
            alt="Finding Dory"
            className="imgs"
          />
          <img
            src="https://www.themoviedb.org/t/p/original/eAdO0qa9m0NFSVLZ26PvCwmPlsr.jpg"
            alt="Up"
            className="imgs"
          />
          <img
            src="https://m.media-amazon.com/images/I/51SGqarLdFL._AC_.jpg"
            alt="Bolt"
            className="imgs"
          />
        </div>
      </div>
      <div className="hp-movies container">
        <div className="hp-movies_more">
          <h2>Trending Movies</h2>
          <Link to="/trending">See More</Link>
        </div>
        <div className="img-container">
          <img
            src="https://talenthouse-res.cloudinary.com/image/upload/c_fill,f_auto,h_948,w_640/v1619649706/user-1101439/profile/fcgkcuixm5e1ghfubzqc.jpg"
            alt="Spider Man No Way Home"
            className="imgs"
          />
          <img
            src="https://www.joblo.com/wp-content/uploads/2019/08/joker-poster-main2-1.jpg"
            alt="Joker"
            className="imgs"
          />
          <img
            src="https://ae01.alicdn.com/kf/HTB1GkgqKpXXXXXIXFXXq6xXFXXXW/Free-shipping-WALL-E-Movie-Poster-HD-HOME-WALL-Decor-Custom-ART-PRINT-Silk-Wallpaper-unframed.jpg"
            alt="Wally"
            className="imgs"
          />
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_FMjpg_UX1000_.jpg"
            alt="Venom"
            className="imgs"
          />
        </div>
      </div>
      <div className="hp-movies container">
        <div className="hp-movies_more">
          <h2>Top Rated Movies</h2>
          <Link to="/top">See More</Link>
        </div>
        <div className="img-container">
          <img
            src="https://m.media-amazon.com/images/I/911USrdQtPL._AC_SL1500_.jpg"
            alt="Shawshank Redemption"
            className="imgs"
          />
          <img
            src="https://i5.walmartimages.com/asr/7e7bdd18-3b09-49ee-80b2-c2258fe9f8c8_1.8d8ac10b7a26b730d4946269943dba3f.jpeg"
            alt="Green Mile"
            className="imgs"
          />
          <img
            src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/death-note-duo-i28405.jpg"
            alt="Death Note"
            className="imgs"
          />
          <img
            src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            alt="Venom"
            className="imgs"
          />
        </div>
      </div>
    </main>
  );
}
