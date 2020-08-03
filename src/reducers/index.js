import { ADD_MOVIES, FAVOURITE_MOVIES } from "../actions/index";

// set initial movie state
const initialMovieState = {
  list: [],
  favourites: [],
};

// add movies function
export default function movies(state = initialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case FAVOURITE_MOVIES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    default:
      return state;
  }
}
