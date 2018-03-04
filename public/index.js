var AlleRecipe = angular.module('AlleRecipe',['ngRoute']);

AlleRecipe.controller('mainCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  $scope.user = '';
  $scope.setUser = function(){
    $scope.user= "adaw";
  };
}])
.config(function($routeProvider) {
  $routeProvider
   .when('/logOff', {
    templateUrl: 'view/signUp.html'
  })
  .when('/uploadingImage', {
    templateUrl: 'view/uploadingImage.html'
  })
  .when('/profile', {
    templateUrl: 'view/profile.html'
  })
  .otherwise({
        templateUrl : 'view/signUp.html'
  });
});