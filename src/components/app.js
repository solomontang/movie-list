var hasTitle = (movie, input) => {
  var title = movie.title.toLowerCase();
  return title.includes(input.toLowerCase());
}

angular.module('movie-list')
.controller('AppCtrl', function () {
  this.movies = [];
  this.filteredMovies = this.movies;
  this.query = '';

  this.filterMovies = (input) => {
    this.filteredMovies = this.movies.filter( (movie) => hasTitle(movie, input) );
    return this.filteredMovies;
  };

  this.addMovie = (input) => {
    if (input !== undefined || input !== '') {
      this.movies.push({title: input});
      this.filteredMovies = this.filterMovies(this.query);
    }
  }
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});