app.factory("crudFactory", ["$rootScope", "$http", "$q",function($rootScope, $http, $q) {
    var baseUrl = 'http://localhost:81/selfStudy/each-one-teach-one-collections/1%20Introduction%20to%20angular%20in%20Tamil/19%20Insert%20data%20into%20mysql%20using%20angularjs%20part%20-%20II/app/services';
    return {
        post: function(url, user_data) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: baseUrl + url,
                data: user_data
            }).then(function(res) {
                console.log('res in Factory', xx =res);
                deferred.resolve(res);
                console.log('deferred.resolve(res)', deferred.resolve(res));
            }),(function(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }
}]);
