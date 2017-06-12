var hasTitle = (movie, input) => {
  var title = movie.title.toLowerCase();
  return title.includes(input.toLowerCase());
};

var countMovies = (movies) => {
  return movies.reduce(function(acc, val) { return acc + val }, 0);
};

angular.module('movie-list')
.controller('AppCtrl', function () {
  this.movies = [];
  this.filteredMovies = [];
  this.query = '';
  this.movieCount = 0;

  this.filterMovies = (input) => {
    this.filteredMovies = this.movies.map( (movie) => hasTitle(movie, input) );
    this.movieCount = countMovies(this.filteredMovies);
  };

  this.addMovie = (input) => {
    if (input !== undefined || input !== '') {
      var newMovie = {title: input, watched: false};
      this.movies.push(newMovie);
      this.filteredMovies[this.movies.length - 1] = hasTitle(newMovie, this.query);
      this.movieCount = countMovies(this.filteredMovies);
    }
  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});