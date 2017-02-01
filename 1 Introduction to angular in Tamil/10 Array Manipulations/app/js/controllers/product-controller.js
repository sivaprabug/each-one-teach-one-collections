app.controller("productController", ['$scope', function($scope) {
    $scope.products = [{
        "product_id": 1,
        "product_name": "Nexus",
        "product_description": "Built to get the best out of the world’s most popular OS, Nexus is the ultimate Android experience. You arere always among the first to receive software and security updates4.",
        "product_image": "images/phones/nexus.png",
        "product_price": 230
    }, {
        "product_id": 2,
        "product_name": "Apple",
        "product_description": "The extra RAM isn't a reason. Reasons are 3D Touch, better camera, much faster CPU/GPU/storage which still is faster than most android phones, faster touchID",
        "product_image": "images/phones/apple.png",
        "product_price": 320
    }, {
        "product_id": 3,
        "product_name": "Black Berry",
        "product_description": "Fast battery charging: 60% in 30 min (Quick Charge 2.0),Qi/PMA wireless charging (optional). You arere always among the first to receive software and security updates4.",
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
        // console.info('itemIndex', itemIndex);
        $scope.cart[itemIndex].disable = false;
        console.log('$scope.cart', $scope.cart);
        $scope.cart.splice(itemIndex, 1);
        console.info('$scope.cart', $scope.cart);

    };

    $scope.getTotal = function() {
        var total = 0;
        angular.forEach($scope.cart, function(value) {
            total = total + value.product_price;
        });

        return total;
    }
}]);
