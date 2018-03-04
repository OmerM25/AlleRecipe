var AlleRecipe = angular.module('AlleRecipe',['ngRoute']);

AlleRecipe.controller('mainCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}])
.config(function($routeProvider) {
  $routeProvider
   .when('/Book', {
    templateUrl: 'a.html'
  })
  .when('/Books', {
    templateUrl: 'index.html'
  });
});