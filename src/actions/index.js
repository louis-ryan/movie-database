export const selectMovie = (movie) => {
  // console.log('OnClick Working!!!');

  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};

export const deSelectMovie = () => {
  return {
    type: "MOVIE_DESELECTED",
    payload: null,
  };
};

// export const addNewMovie = () => {
//     console.log(props);
//     return {
//       type: "MOVIE_TO_ADD",
//       payload:
//     };
//   };

export const handleChange = (props) => {
  console.log("event registered");
  return {
    type: "VALUE_ADDED",
    payload: props,
  };
};

export const handleSubmit = (event) => {
  return {
    type: "NEW_MOVIE_SUBMITTED",
    payload: event.preventDefault(),
  };
};
