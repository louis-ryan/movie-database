import { combineReducers } from "redux";

const moviesReducer = () => {
  return [
    {
      title: "12 Angry Men",
      yearReleased: "1957",
      director: "Sidney Lumet",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      trailerUrl:
        "https://www.youtube.com/watch?v=2L4IhbF2WK0&ab_channel=BlazingTrailers",
      synopsis:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    },
    {
      title: "There Will be Blood",
      yearReleased: "2007",
      director: "Paul Thomas Anderson",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71AmktJtqgL._SY550_.jpg",
      trailerUrl:
        "https://www.youtube.com/watch?v=OjZ1rUQQKxY&ab_channel=DimitrisTzikas",
      synopsis:
        "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
    },
    {
      title: "Youth - La Giovinezza",
      yearReleased: "2015",
      director: "Paolo Sorrentino",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Youth_poster.jpg",
      trailerUrl:
        "https://www.youtube.com/watch?v=mHnQNyI2ino&ab_channel=IndigoFilm",
      synopsis:
        "A retired orchestra conductor is on vacation with his daughter and his film director best friend in the Alps when he receives an invitation from Queen Elizabeth II to perform for Prince Philip's birthday.",
    },
    {
      title: "Rear Window",
      yearReleased: "1954",
      director: "Alfred Hitchcock",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg",
      trailerUrl:
        "https://www.youtube.com/watch?v=m01YktiEZCw&ab_channel=MovieclipsClassicTrailers",
      synopsis:
        "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
    },
    {
      title: "The Royal Tenenbaums",
      yearReleased: "2001",
      director: "Wes Anderson",
      imgUrl:
        "https://vignette.wikia.nocookie.net/wesanderson/images/e/e6/The_Royal_Tenenbaums_Poster.png/revision/latest?cb=20110219193540",
      trailerUrl:
        "https://www.youtube.com/watch?v=-DNAI9bhBFU&ab_channel=thecoolidge",
      synopsis:
        "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.",
    },
  ];
};

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case "MOVIE_SELECTED":
      return action.payload;
    case "MOVIE_DESELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});
