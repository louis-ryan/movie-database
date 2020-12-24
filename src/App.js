import React, { Component } from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";

class App extends Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <h1>Movie Database</h1>
        <div>
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default App;
