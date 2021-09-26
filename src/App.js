import { useState } from "react";
import "./styles.css";

const series = {
  "comedy😂": [
    { name: "B99", rating: 4.0 },
    { name: "FRIENDS", rating: 3.5 },
    { name: "The Office", rating: 4.5 }
  ],

  "thriller😱": [
    { name: "Behind Her Eyes", rating: 4.5 },
    { name: "The Innocent", rating: 4.0 },
    { name: "You", rating: 3.5 }
  ],

  "drama🎭": [
    { name: "The Crown", rating: 4.5 },
    { name: "Shameless", rating: 4.5 }
  ]
};

const genreList = Object.keys(series);

export default function App() {
  const [chosengenre, setchosengenre] = useState("comedy😂");

  function genreClickHandler(event) {
    setchosengenre(event.target.innerHTML);
  }

  return (
    <div className="App">
      <h1>SERIES RECOMMENDER</h1>

      <div>
        {genreList.map((genre) => (
          <button key={genre} className="genreList" onClick={genreClickHandler}>
            {genre}
          </button>
        ))}

        <hr />
      </div>

      <ul>
        {series[chosengenre].map((series) => (
          <li className="seriesList" key={series.name}>
            {" "}
            {series.name}
            <br /> {series.rating}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
