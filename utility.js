module.exports = {

    formatCurrency: function(unformattedString) {
        var currency = parseFloat(unformattedString);
        if (isNaN(currency)) {
            currency = '$0.00';
        }
        else {
            currency = '$' + currency.toFixed(2);
        }
        return currency;
    }
};