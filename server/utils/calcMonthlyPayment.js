const calcMonthlyPayment = (amount, maturity, interestRate) => {
    interestRate /= 100
    return Number((amount * ((interestRate * (Math.pow((1+interestRate), maturity))) / ((Math.pow((1+interestRate), maturity)) - 1))).toFixed(2))
};


module.exports = calcMonthlyPayment;