app.controller('indexController', ['$scope', 'myFactory', 'crudFactory', function($scope, myFactory, crudFactory) {
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
    }];

    $scope.welcomeMesage = myFactory.sayHello('AngularJS');

    $scope.onSubmit = function() {
        crudFactory.post('/inserUserDetails', {
            userName: $scope.user.userName,
            userEmail: $scope.user.email,
            userAge: $scope.user.age,
            userMobileNumber: $scope.user.mobile,
            userPassword: $scope.user.password,
            userReTypePassword: $scope.user.reTypePasword
        }).then(function(res) {
            console.log('res in Controller', rr=res);
            alert('success');
        }, function(err) {
            alert('Error');
        });
    }
}]);
