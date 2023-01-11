import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          This app was coded by MP. It is available {""}
          <a
            href="https://github.com/eltirolibre/react-weather-mp"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Github
          </a>{" "}
          and hosted{" "}
          <a
            href="https://boisterous-mousse-8ad5a2.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
