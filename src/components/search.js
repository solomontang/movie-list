angular.module('movie-list')
.controller('SearchCtrl', function () {
  // this.handleClick = () => {
  //   console.log('test');
  //   this.service.search(this.input, (data) => {
  //     this.result(data);
  //   });
  // };
})

.component('search', {
  bindings: {
    // service: '<',
    // result: '<'
  },
  controller: 'SearchCtrl',
  templateUrl: 'src/templates/search.html'
});