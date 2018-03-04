var AlleRecipe = angular.module('AlleRecipe',['ngRoute']);

AlleRecipe.controller('mainCtrl', ['$scope', function($scope) {
  $scope.user = '';
  $scope.checkUser = function(){
    $scope.user= {name:"marina"};
  };
}])
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
    controller: 'uploadctrl'
  })
  .when('/profile', {
    templateUrl: 'view/profile.html',
    controller : ""
  })
  .otherwise({
        templateUrl : 'view/signUp.html'
  });
});