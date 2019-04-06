const todos = [
  {
    id: 11,
    title: 'gdfg 1 fdgdfgfdg',
    completed: false
  },
  {
    id: 12,
    title: 'gdfg 2 fdgdfgfdg',
    completed: false
  },
  {
    id: 13,
    title: 'This task is comepleted',
    completed: true
  },
  {
    id: 14,
    title: 'Fourth Task',
    completed: false
  }
];

//returns all movies
export function getTodos() {
  return todos;
}

//1 movie
// export function getMovie(id) {
//   return movies.find(m => m._id === id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
