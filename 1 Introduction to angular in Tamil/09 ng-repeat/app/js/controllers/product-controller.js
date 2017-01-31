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
}]);
