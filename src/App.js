import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/Rafalenda/react-weather-app">
            This site was coded by Rafaela
          </a>{" "}
          open sourced on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
