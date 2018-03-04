var AlleRecipe = angular.module('AlleRecipe',['ngRoute']);

<<<<<<< HEAD
AlleRecipe.controller('mainctrl', function($scope) {
  $scope.greeting = 'Hola!';
=======
AlleRecipe.controller('mainCtrl', ['$scope', function($scope) {
>>>>>>> 5c4731e267416c0e6bd499d826d7fb4feddee61a
  $scope.user = '';
  $scope.checkUser = function(){
    $scope.user= {name:"marina"};
  };
})
.config(function($routeProvider) {
  $routeProvider
  .when('/logOff', {
    templateUrl: 'view/signUp.html'
  })
  .when('/signIn', {
    templateUrl: 'view/signIn.html',
    controller : ""
  })
  .when('/uploadingImage', {
    templateUrl: 'view/uploadingImage.html',
<<<<<<< HEAD
    controller: 'uploadctrl'
=======
    controller : ""
>>>>>>> 5c4731e267416c0e6bd499d826d7fb4feddee61a
  })
  .when('/profile', {
    templateUrl: 'view/profile.html',
    controller : ""
  })
  .otherwise({
        templateUrl : 'view/signUp.html'
  });
});