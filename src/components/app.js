var hasTitle = (movie, input) => {
  var title = movie.title.toLowerCase();
  return title.includes(input.toLowerCase());
}

angular.module('movie-list')
.controller('AppCtrl', function () {
  this.movies = [];
  this.filteredMovies = [];
  this.query = '';

  this.filterMovies = (input) => {
    this.filteredMovies = this.movies.map( (movie) => hasTitle(movie, input) );
  };

  this.addMovie = (input) => {
    if (input !== undefined || input !== '') {
      var newMovie = {title: input};
      this.movies.push(newMovie);
      this.filteredMovies[this.movies.length - 1] = hasTitle(newMovie, this.query);
    }
  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});