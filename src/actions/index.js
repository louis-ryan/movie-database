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
