angular.module('movie-list')
.component('movieListEntry', {
  bindings: {
    movie: '<'
  },
  templateUrl: 'src/templates/movieListEntry.html'
});