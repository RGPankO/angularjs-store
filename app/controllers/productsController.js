angular.module('storeApp')
.controller('ProductsController',['$scope', 'Products', 'Basket', function($scope, Products, Basket) {
    $scope.products = [];
    $scope.basket = [];
    $scope.orderBy = 'id';
    $scope.orderByAsc = false;
    $scope.categories = Products.categories();

    $scope.getAllProducts = function(){
            Products.all().
        then(function successCallback(response) {
            // console.log(response);
            $scope.products = response.data.products;
        }, function errorCallback(response) {
            // console.log(response);
        });
    }

    $scope.filterCategoryActivate = function(category){
        category.active = category.active ? false : true;
    }

    $scope.filterByCategories = function(item){
        hasActiveFilter = 0
        for (var i = 0; i < $scope.categories.length; i++) {
            if ($scope.categories[i].active) {
              hasActiveFilter++;
            }
          }
          if(hasActiveFilter){
            temp = 0;
            for (i = 0; i < $scope.categories.length; i++) {
                if($scope.categories[i].active){
                    if($scope.categories[i].name == item.category){
                        temp++;
                    }
                }
            };
            return temp;
        }
        return true;
    }

    $scope.changeOrder = function(){
        $scope.orderByAsc = !$scope.orderByAsc;
    }

    $scope.addToBasket = function(product){
        Basket.addProduct(product);
    }

    $scope.resetAmount = function(product){
        product.toAdd = 1;
    }

    $scope.amountIncrease = function(product){
        product.toAdd++;
    }

    $scope.amountDecrease = function(product){
        product.toAdd = product.toAdd > 1 ? product.toAdd - 1 : product.toAdd;
    }
}]);
