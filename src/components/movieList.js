angular.module('movie-list')
.component('movieList', {
  bindings: {
    movies: '<',
    filteredMovies: '<'
  },
  templateUrl: 'src/templates/movieList.html'
});