AlleRecipe.controller("ingredientsCtrl", ['$scope', '$location', '$rootScope', '$http', function($scope, $location, $rootScope, $http) {
    $scope.ingredients = $rootScope.ingredients;
    
    $scope.getRecipes = function() {
        var finalIngredients = [];
        
        for (ing in $scope.ingredients) {
            if ($scope.ingredients[ing].active) {
                finalIngredients.push($scope.ingredients[ing].name);
            } 
        }
        
        $http.post("/recipe", {ingredients: finalIngredients}).then(function(res) {
            if (res.data.length > 0) {
                $rootScope.recieps = res.data;
                $location.path('/recipes');
            } else {
                alert("No recipes found! Try choosing different ingredients...")
            }
        }, function(err) {
           alert("Error! Try again..."); 
        });
    }
    
}]);