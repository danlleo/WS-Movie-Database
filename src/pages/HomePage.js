import React from "react";

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
          Watch Trailer <i className="fas fa-play"></i>
        </button>
      </div>
      <div className="recommended-movies container">
        <div className="recommended-movies_more">
          <h2>Recommended Movies</h2>
          <p>See More</p>
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
    </main>
  );
}
