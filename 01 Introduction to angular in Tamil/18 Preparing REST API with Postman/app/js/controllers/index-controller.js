app.controller('indexController', ['$scope', 'myFactory', function($scope, myFactory) {
    $scope.message = " Independence day !";
    $scope.postData = function() {
        alert($scope.userName);
    }
    $scope.countryDetails = [{
        "Name": "Alfreds Futterkiste",
        "City": "Berlin",
        "Country": "Germany"
    }, {
        "Name": "Ana Trujillo Emparedados y helados",
        "City": "México D.F.",
        "Country": "Mexico"
    }, {
        "Name": "Antonio Moreno Taquería",
        "City": "México D.F.",
        "Country": "Mexico"
    }]

    $scope.welcomeMesage = myFactory.sayHello('AngularJS');
}]);
