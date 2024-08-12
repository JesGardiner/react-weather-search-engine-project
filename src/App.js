import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Weather App</header>
        <button className="btn btn-primary">Hello</button>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/JesGardiner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jessica Gardiner
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/JesGardiner/react-weather-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://chic-pavlova-8d03a2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
