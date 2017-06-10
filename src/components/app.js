angular.module('movie-list')
.controller('AppCtrl', function () {
  this.movies = movieData;
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});