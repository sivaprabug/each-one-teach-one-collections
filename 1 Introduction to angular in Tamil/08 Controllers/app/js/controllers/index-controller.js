app.controller('indexController', ['$scope', function($scope) {
    $scope.message =  " Independence day !";
    $scope.postData = function(){
    	alert($scope.userName);
    }
}]);
