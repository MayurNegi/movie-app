// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const FAVOURITE_MOVIES = "FAVOURITE_MOVIES";

// action creaters
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: FAVOURITE_MOVIES,
    movie,
  };
}
