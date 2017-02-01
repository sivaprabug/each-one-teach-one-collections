app.controller('formController', ['$scope', function($scope) {
    $scope.onSubmit = function() {
        console.log($scope.user);
    }
}]);
