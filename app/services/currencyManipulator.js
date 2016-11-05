angular.module('storeApp')
.service('CurrencyManipulator',function(){
    return {
        removeSymbol: function(currency){
            currency = currency.toString();
            if(isNaN(currency.substring(0,1))){
                currency = currency.substring(1);
            } else if(isNaN(currency.substring(currency.length - 1,1))){
                currency = currency.substring(0, currency.length - 1);;
            }

            return currency
        }
    }
})
