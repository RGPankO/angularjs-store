angular.module('storeApp')
.directive('filterCategoryItem', function(){
    return {
        templateUrl: 'app/directives/products/filter/categoryItem/categoryItem.html',
        replace: true
    };
});
