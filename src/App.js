import React from "react";
import "./styles.css";
import { useState } from "react";

const superHeroesDB = {
  IronMan: [
    { name: "Iron-Man", rating: "Imdb Rating : 7.9" },
    { name: "Iron-Man 3", rating: "Imdb Rating : 7.1" }
  ],

  BatMan: [
    {
      name: "The Dark Knight",
      rating: "Imdb Rating : 9.0"
    },
    {
      name: "The Dark Knight Rises",
      rating: "Imdb Rating : 8.4"
    }
  ],
  SpiderMan: [
    {
      name: "Spider-Man",
      rating: "Imdb Rating : 7.4"
    },
    {
      name: "Spider-Man : No Way Home",
      rating: "Imdb Rating : 8.3"
    }
  ]
};

const superHeroesInDB = Object.keys(superHeroesDB);

export default function App() {
  const [superH, setSuperH] = useState("IronMan");

  function buttonClickHandler(event) {
    setSuperH(event.target.value);
  }

  const heroesOutput = superHeroesDB[superH];

  return (
    <div className="App">
      <h1>Super Heroes</h1>
      <h2>Checkout my favorite Super hero movies.</h2>
      <div>
        {superHeroesInDB.map((item, index) => (
          <button
            id="btn"
            onClick={buttonClickHandler}
            value={item}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      {heroesOutput.map((item, i) => (
        <div
          key={i}
          style={{
            fontSize: "1.5rem",
            color: "rgb(165, 56, 42)",
            border: "1px solid black",
            margin: "1rem 0rem",
            borderRadius: "1rem",
            padding: "0.4rem"
          }}
        >
          {item.name}
          <br />
          {item.rating}
        </div>
      ))}
    </div>
  );
}
