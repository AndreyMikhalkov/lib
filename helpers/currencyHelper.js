
const numeral = require('numeral');

module.exports.parseDollars = function (numericString) {
    if (numericString === null) {
        return null;
    }

    return numeral().unformat(numericString);
};

module.exports.round = function (value, decimals) {
    const number = Number(`${value}e${decimals}`);
    const roundedValue = Math.round(number);

    return Number(`${roundedValue}e-${decimals}`);
};

module.exports.convertFromDollarsToCents = function (dollars) {
    if (dollars === null) {
        return null;
    }

    const cents = numeral(dollars).multiply(100).value();

    return round(cents, 0);
};

module.exports.convertFromCentsToDollars = function (cents, format) {
    if (cents === null) {
        return null;
    }

    const dollars = numeral(cents).divide(100).value();
    const roundedDollars = round(dollars, 2);

    return numeral(roundedDollars).format(format);
};
