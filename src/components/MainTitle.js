import React from "react";

export default function MainTitle({ background }) {
  return (
    <div
      className="main-title container"
      style={{
        backgroundImage: `linear-gradient(
            0deg,
            rgb(39, 39, 39) 0%,
            rgba(20, 20, 20, 0.46) 30%
        ), url(${background})`,
      }}
    >
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
  );
}
