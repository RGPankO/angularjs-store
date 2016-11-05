angular.module('storeApp')
.directive('productsListing', function(){
    return {
        templateUrl: 'app/directives/products/list/list.html',
        controller: 'ProductsController'
    }
})
