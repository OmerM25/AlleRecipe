
AlleRecipe.controller('signCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.checkUser = function(){
    $http({
      method: "post",
      url: "/login",
      data: {'username':  document.getElementById('username'), 'password':  document.getElementById('password')},
      headers : {
          'Content-Type': 'application/json'
      }})
      .then(function(res) {
          alert("hello" + res.data.username);
      }, function(err) {
          alert("User name or password incorrect");
      });
  };
}]);
