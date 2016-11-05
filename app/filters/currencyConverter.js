angular.module('storeApp')
.filter('CurrencyConverter', [function(){
     return function(amount, symbol, maxLength, startOrEnd){
         amount = amount.toString();
        if(isNaN(amount.substring(0,1))){
            amount = amount.substring(1);
        } else if(isNaN(amount.substring(amount.length - 1,1))){
            amount = amount.substring(0, amount.length - 1);;
        }
        maxLength = maxLength ? maxLength : 2;
        // console.log(amount);
        amount = Number(amount).toFixed(maxLength);
        amount = startOrEnd ? amount + symbol : symbol + amount;

        return amount
    }
}]);
