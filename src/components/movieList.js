angular.module('movie-list')
.component('movieList', {
  bindings: {
    movies: '<',
    filteredMovies: '<',
    movieCount: '<'
  },
  templateUrl: 'src/templates/movieList.html'
});