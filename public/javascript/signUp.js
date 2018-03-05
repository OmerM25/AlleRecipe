
AlleRecipe.controller('signCtrl', ['$scope', '$http', "$location", "$rootScope", function($scope, $http, $location, $rootScope) {
  $scope.checkUser = function(){
        $http({
            method: "post",
            url: "/login",
            data: {'username':  document.getElementById('username').value, 'password':  document.getElementById('password').value},
        })
        .then(function(response) {
            $rootScope.user = response.data;
            $location.path('/uploadingImage')
        }, 
        function(response) { // optional
            alert("bad");
        });
  };
}]);
