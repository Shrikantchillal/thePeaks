const formatCurrency = (currencySymbol: string, decimalOperator: string) => {
    return function(value: number) {
        const wholePart = Math.trunc(value / 100);
        const fractionPart = wholePart % 100;
        let finalValue: string = fractionPart.toString();
        if (fractionPart < 10) {
            finalValue =  `0${finalValue}`
        }

        return `${currencySymbol}${value}${decimalOperator}${finalValue}`
    }
}

export default formatCurrency;