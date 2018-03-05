AlleRecipe.controller("ingredientsCtrl", ['$scope', 'ingredientFactory', '$rootScope', '$http', function($scope, ingredientFactory, $rootScope, $http) {
    $scope.ingredients = $rootScope.ingredients;
    
    $scope.getRecipes = function() {
        var finalIngredients = [];
        
        for (ing in $scope.ingredients) {
            if ($scope.ingredients[ing].active) {
                finalIngredients.push($scope.ingredients[ing].name);
            } 
        }
        
        $http.post("/recipe", {ingredients: finalIngredients}).then(function(res) {
            alert("success");
        }, function(err) {
           alert(err); 
        });
    }
    
}]);