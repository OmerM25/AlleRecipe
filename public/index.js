var AlleRecipe = angular.module('AlleRecipe',['ngRoute']);

$(document).ready(function() { $('body').bootstrapMaterialDesign(); });

AlleRecipe.controller('mainctrl', ['$scope', function($scope) {
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
  .when('/ingredients', {
    templateUrl: 'view/ingredients.html',
    controller: 'ingredientsCtrl'
  })
  .when('/profile', {
    templateUrl: 'view/profile.html',
    controller : ""
  })
  .otherwise({
        templateUrl : 'view/signUp.html'
  });
})
.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})
.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}])
.factory("ingredientFactory", function() {
 var ingredients = []
 
 function set(data) {
   ingredients = data;
 }
 function get() {
  return ingredients;
 }

 return {
  set: set,
  get: get
 }  
});