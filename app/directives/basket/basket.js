angular.module('storeApp')
.directive('basket', function(){
    return {
        templateUrl: 'app/directives/basket/index.html',
        controller: 'BasketController',
        scope: {
            // products: '@'
        }
    }
});
