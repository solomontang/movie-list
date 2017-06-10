angular.module('movie-list')
.component('movieList', {
  bindings: {
    movies: '<'
  },
  templateUrl: 'src/templates/movieList.html'
});