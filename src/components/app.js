angular.module('movie-list')
.controller('AppCtrl', function () {
  this.movies = movieData;

  this.filterMovies = (input) => {
    this.movies = movieData;
    this.movies = this.movies.filter( (movie) => {
      var title = movie.title.toLowerCase();
      return title.includes(input.toLowerCase());
    });
  };

  this.addMovie = (input) => {
    console.log(input);
    if (input !== undefined || input !== '') {
      this.movies.push({title: input});
    }
  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});