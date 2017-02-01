# Array Manipulations

- Array and object is main concept in AngularJS
- If user click the add to cart button means add the product to cart
- Call the addToCart() function, then disable button

				$scope.cart.push($scope.products[productIndex]);
        $scope.products[productIndex].disable = true;

- Click to remove the item from the cart then  enable button.

        $scope.cart[itemIndex].disable = false;
        $scope.cart.splice(itemIndex, 1);
