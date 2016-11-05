angular.module('storeApp')
.provider('Products', function ProductsProvider(){
    // var serviceUrl = 'http://localhost:3000/';
    var serviceUrl = 'data/';
    // console.log(serviceUrl);

    this.$get = ['$http', function($http){
        return {
            all: function(){
                return $http({
                    method: 'GET',
                    // url: serviceUrl + 'products'
                    url: serviceUrl + 'db.json'
                });
            },
            categories: function(){
                return [
                    {name: "Bakery"},
                    {name: "Drinks"},
                    {name: "Fresh food"},
                    {name: "Pets"}
                ];
            }
        };
    }];
});
