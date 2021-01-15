import React from "react";
import "./App.css";
import Weather from "./Weather";

const dotenv = require("dotenv").config();

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
          This site was coded by Rafaela open sourced on
          <a href="https://github.com/Rafalenda/react-weather-app">
            <span>&nbsp;</span>GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
