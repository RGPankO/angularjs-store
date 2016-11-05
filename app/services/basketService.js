angular.module('storeApp')
.service('Basket', ['CurrencyManipulator', function(CurrencyManipulator){
    products = [];
    totalBasket = {'total':0};

    return {
        addProduct: function(product){
            if(products.indexOf(product) === -1) {
                product.inBasketAmount ? product.inBasketAmount += product.toAdd : product.inBasketAmount = product.toAdd;
                products.push(product);
            } else {
                product.inBasketAmount += product.toAdd;
            }
            product.price = CurrencyManipulator.removeSymbol(product.price);
            this.updateTotalForProduct(product);
            this.updateBasketTotal(product);
            product.inBasket = true;
            product.toAdd = 1;
        },
        updateTotalForProduct: function(product){
            product.totalCost = product.price * product.inBasketAmount;
        },
        getProducts: function(){
            return products;
        },
        amountIncrease: function(product){
            product.inBasketAmount++;
            this.updateTotalForProduct(product);
            this.updateBasketTotal(product);
        },
        amountDecrease: function(product){
            product.inBasketAmount = product.inBasketAmount > 1 ? product.inBasketAmount - 1 : product.inBasketAmount;
            this.updateTotalForProduct(product);
            this.updateBasketTotal(product);
        },
        getBasketTotal: function(){
            return totalBasket;
        },
        updateBasketTotal: function(){
            temp = 0;
            products.forEach(function(product){
                temp =  temp + Number(product.price) * Number(product.inBasketAmount);
            });
            totalBasket.total = temp;
        },
        remove: function(product){
            products.splice(products.indexOf(product),1);
            product.inBasketAmount = 0;
            product.inBasket = false;
            this.updateTotalForProduct(product);
            this.updateBasketTotal(product);
        }
    };

}]);
