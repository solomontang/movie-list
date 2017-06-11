angular.module('movie-list')
.component('addMovie', {
  bindings: {
    handleSubmit: '<'
  },
  templateUrl: 'src/templates/addMovie.html'
})