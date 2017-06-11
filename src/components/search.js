angular.module('movie-list')

.component('search', {
  bindings: {
    handleSearch: '<'
  },
  templateUrl: 'src/templates/search.html'
});