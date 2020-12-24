import React from "react";
import { connect } from "react-redux";
import { handleChange, handleSubmit } from "../actions";

const NewMovie = (props) => {
  return (
    <form onSubmit={() => props.handleSubmit()}>
      <h2>New Movie</h2>

      <p>Title</p>
      <input type="text" value="" onChange={() => props.handleChange()}></input>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "45%",
          }}
        >
          <p>Director</p>
          <input></input>
        </div>
        <div
          style={{
            width: "45%",
          }}
        >
          <p>Year of Release</p>
          <input></input>
        </div>
      </div>
      <p>Synopsis</p>
      <textarea
        style={{
          height: "160px",
        }}
      ></textarea>
      <p>Poster Image URL</p>
      <input></input>
      <p>Theatrical Trailer URL</p>
      <input></input>

      <input type="submit" value="Submit" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

const mapDispatchToProps = {
  handleChange: handleChange,
  handleSubmit: handleSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
