app.controller("productController", ['$scope', function($scope) {
    $scope.products = [{
        "product_id": 1,
        "product_name": "Nexus",
        "product_description": "lorem",
        "product_image": "images/phones/nexus.png",
        "product_price": 230
    }, {
        "product_id": 2,
        "product_name": "Apple",
        "product_description": "lorem",
        "product_image": "images/phones/apple.png",
        "product_price": 320
    }, {
        "product_id": 3,
        "product_name": "Black Berry",
        "product_description": "lorem",
        "product_image": "images/phones/blackberry.png",
        "product_price": 520
    }];

    $scope.cart = [];

    $scope.addToCart = function(productIndex) {
        console.log('productIndex', productIndex);
        $scope.cart.push($scope.products[productIndex]);
        $scope.products[productIndex].disable = true;

    };

    $scope.removeItemFromCart = function(itemIndex) {
    		var disable;
        $scope.cart.splice(itemIndex, 1);
        console.log('itemIndex', itemIndex);
        $scope.cart[itemIndex].disable = false;
        console.log('$scope.cart[itemIndex].disable', $scope.cart[itemIndex].disable);
    };

    $scope.getTotal = function() {
        var total = 0;
        angular.forEach($scope.cart, function(value) {
            total = total + value.product_price;
        });

        return total;
    }
}]);
