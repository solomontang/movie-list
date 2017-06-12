angular.module('movie-list')
.controller('MovieListEntryCtrl', function () {
  this.watched = true;

  this.toggleWatched = () => {
    this.watched = !this.watched;
  }
})
.component('movieListEntry', {
  bindings: {
    movie: '<'
  },
  controller: 'MovieListEntryCtrl',
  templateUrl: 'src/templates/movieListEntry.html'
});