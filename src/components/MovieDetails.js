import React from "react";
import { connect } from "react-redux";
import { deSelectMovie } from "../actions/index";
import MovieTrailer from "./MovieTrailer";
import MovieList from "./MovieList";

const MovieDetails = (props) => {
  console.log("movie details props", props);
  if (!props.selectedMovie) {
    return (
      <div>
        <MovieList />
      </div>
    );
  } else if (props.selectedMovie) {
    return (
      <div>
        <button
          style={{
            height: "48px",
            marginBottom: "16px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          onClick={() => props.deSelectMovie()}
        >
          <p
            style={{
              fontWeight: "800",
            }}
          >
            « Return to List
          </p>
        </button>
        <div
          style={{
            width: "calc( 100% + 48px)",
            height: "160px",
            overflow: "hidden",
            marginLeft: "-24px",
          }}
        >
          <img
            style={{
              marginTop: "-40px",
              width: "100%",
            }}
            src={props.selectedMovie.imgUrl}
            alt=""
          ></img>
        </div>
        <h2>
          {props.selectedMovie.title} ({props.selectedMovie.yearReleased})
        </h2>
        <div className="properties">
          <p>{props.selectedMovie.director}</p>
          <p>{props.selectedMovie.synopsis}</p>
        </div>
        <MovieTrailer />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

const mapDispatchToProps = {
  deSelectMovie: deSelectMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
