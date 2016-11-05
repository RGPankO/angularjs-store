angular.module('storeApp')
.controller('BasketController', ['$scope','Basket', function($scope, Basket){
    // console.log('in the basket');
    // $scope.products = [];
    $scope.products = Basket.getProducts();
    $scope.basketTotal = Basket.getBasketTotal();
    // console.log($scope.products);

    $scope.getProducts = function(){
        $scope.products = Basket.getProducts();
    }

    $scope.amountIncrease = function(product){
        Basket.amountIncrease(product);
    }

    $scope.amountDecrease = function(product){
        Basket.amountDecrease(product);
    }

    $scope.remove = function(product){
        Basket.remove(product);
    }

}]);
