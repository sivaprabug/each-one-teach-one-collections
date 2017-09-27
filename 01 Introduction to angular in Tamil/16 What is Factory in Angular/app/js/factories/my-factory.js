app.factory("myFactory", ["$rootScope", function($rootScope) {
    return {
        sayHello: function(name) {
            return name;
        }
    }
}]);