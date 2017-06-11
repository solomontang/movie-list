angular.module('movie-list')
.controller('MovieListEntryCtrl', function () {
  this.watched = 'watched';
})
.component('movieListEntry', {
  bindings: {
    movie: '<'
  },
  controller: 'MovieListEntryCtrl',
  templateUrl: 'src/templates/movieListEntry.html'
});