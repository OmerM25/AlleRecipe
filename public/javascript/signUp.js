var AlleRecipe = angular.module('AlleRecipe',[]);
AlleRecipe.controller('signCtrl', ['$scope', function($scope) {
  $scope.user = '';
  $scope.setUser = function(){
      $scope.user= "adaw";
  };
}]);