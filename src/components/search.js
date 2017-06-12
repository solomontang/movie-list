var SearchCtrl = function () {
  this.doSearchThings = (input) => {
    this.handleSearch(input);
    this.query = input;
  }
};

angular.module('movie-list')

.component('search', {
  bindings: {
    handleSearch: '<',
    query: '='
  },
  controller: SearchCtrl,
  templateUrl: 'src/templates/search.html'
});