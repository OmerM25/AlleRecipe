AlleRecipe.controller("ingredientsCtrl", ['$scope', 'ingredientFactory', '$rootScope', function($scope, ingredientFactory, $rootScope) {
    $scope.ingredients = $rootScope.ingredients;
    
}]);