app.controller('formController', ['$scope', function($scope) {
    $scope.user = [];
    $scope.user.userName = "Sivaprabu Ganesan";
    $scope.onSubmit = function() {
        console.log($scope.user);
    }
}]);
