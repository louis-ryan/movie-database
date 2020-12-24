import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";

const MovieTrailer = (props) => {
  if (!props.selectedMovie) {
    return (
      <div>
        <ReactPlayer url="" playing="true" volume="0" />
      </div>
    );
  } else {
    return (
      <div style={{
          width: "calc(100% + 64px)",
          marginLeft: "-24px",
          backgroundColor: "black"
      }}>
        <ReactPlayer
        style={{
            marginLeft: "48px",
            zoom: "0.5"
        }}
          url={props.selectedMovie.trailerUrl}
          playing="true"
          volume="0"
          loop="true"
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieTrailer);
