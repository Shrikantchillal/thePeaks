import formatCurrency from '../common/helperFunctions';

const Misc = () => {
    let formatValue: any = formatCurrency('$', '.');
    formatValue = formatValue(2);
    return formatValue;
};

export default Misc;