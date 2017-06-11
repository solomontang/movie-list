angular.module('movie-list')

.component('search', {
  bindings: {
    handleSubmit: '<'
  },
  templateUrl: 'src/templates/search.html'
});