import React from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions/index";

const MovieList = (props) => {
  const listItems = props.movies.map((movie) => {
    // console.log("movie list Props", props);
    return (
      <div key={movie.title}>
        <button
          style={{
            width: "calc(100% + 88px)",
            height: "64px",
            marginLeft: "-64px",
            display: "flex",
            justifyContent: "left",
          }}
          onClick={() => props.selectMovie(movie)}
        >
          <div
            style={{
              height: "58px",
              width: "64px",
              overflow: "hidden",
              marginLeft: "-4px",
              marginTop: "-0px",
            }}
          >
            <img
              style={{
                width: "64px",
              }}
              src={movie.imgUrl}
              alt=""
            ></img>
          </div>
          <div>
            <p
              style={{
                textAlign: "left",
                marginLeft: "16px",
                marginTop: "24px",
                fontWeight: "800",
              }}
            >
              {movie.title}
            </p>
          </div>
        </button>
      </div>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  selectMovie: selectMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
