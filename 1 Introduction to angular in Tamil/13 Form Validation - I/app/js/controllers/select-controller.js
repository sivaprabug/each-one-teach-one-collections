app.controller('selectController', ['$scope', function($scope) {
    $scope.countries = [{
        country_id: 1,
        country_name: "IND"
    }, {
        country_id: 2,
        country_name: "PAK"
    }, {
        country_id: 3,
        country_name: "UAE"
    }];
    $scope.onSubmit = function() {
        console.log($scope.user);
    }
}]);
