
AlleRecipe.controller("recipesCtrl", ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.recipes = $rootScope.recieps;
    
}]).controller("ModalCtrl", function($scope) {
   this.setModel = function(data) {
      $scope.$apply( function() {
         $scope.recipe = data;
      });
   }
   $scope.setModel = this.setModel;     
}).directive('opendialog',
   function() {
      var openDialog = {
         link :   function(scope, element, attrs) {
            function openDialog() {
              var element = angular.element('#myModal');
              var ctrl = element.controller();
              ctrl.setModel(scope.recipe);
              element.modal('show');
            }
            element.bind('click', openDialog);
       }
   }
   return openDialog;
});