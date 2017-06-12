angular.module('movie-list')
.controller('MovieListEntryCtrl', function () {

  this.toggleWatched = () => {
    this.movie.watched = !this.movie.watched;
  }
})
.component('movieListEntry', {
  bindings: {
    movie: '<'
  },
  controller: 'MovieListEntryCtrl',
  templateUrl: 'src/templates/movieListEntry.html'
});