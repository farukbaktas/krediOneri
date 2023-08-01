const calcMonthlyPayment = require('../utils/calcMonthlyPayment');
const banksModel = require('../database/Schemas/Banks');
const houseLoansModel = require('../database/Schemas/HouseLoans');
const { filteredHouseLoans } = require('../services/dbServices');
const housingLoan = async (req, res) => {
    const { amount, maturity } = req.query;
    if (!amount || !maturity) return res.status(400).json({ success: false, message: 'Invalid queries' });
    let houseLoans = await filteredHouseLoans(amount, maturity);
    houseLoans = houseLoans.map(m => {
        const monthlyInstallment = calcMonthlyPayment(amount, maturity, m.interestRate);
        const fileFee = amount * 0.005
        const expenseAmount = m.appraisementFee + fileFee + m.mortgageFee
        const totalAmount = (monthlyInstallment * maturity) + expenseAmount
        return { bankId: m.bank.id, ...m._doc, amount, maturity, monthlyInstallment, fileFee, expenseAmount, totalAmount }
    });
    res.send({ products: houseLoans })
};

const housingLoanDetail = async (req, res) => {
    const { bankSeoName: seoName, amount, maturity } = req.query;
    if (!amount || !maturity || !seoName) return res.status(400).json({ success: false, message: 'Invalid queries' });
    const bank = await banksModel.findOne({ seoName });
    if(!bank) return res.status(400).json({success: false, message: 'Invalid bank name'});
    let houseLoans = await houseLoansModel.findOne({ bank, 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({path: 'bank', select: '-_id -houseLoans'});
    let mainPayment = amount;
    const paymentPlan = {
        amount,
        maturity,
        interestRate : houseLoans.interestRate,
        monthlyPayments: []
    };
    const interestRate = houseLoans.interestRate / 100
    const monthlyInstallment = calcMonthlyPayment(amount, maturity, houseLoans.interestRate);

    for (let i = 0; i < maturity; i++) {
        let interestPayment = (Number(mainPayment * interestRate).toFixed(2));
        let mainAmount = Number((monthlyInstallment - interestPayment).toFixed(2));
        mainPayment -= monthlyInstallment - interestPayment;
        const currMaturity = { currentMaturity: i + 1, monthlyInstallment, mainAmount, kkdf: 0, bsmv: 0, mainBalance: mainPayment, interestPayment }
        paymentPlan.monthlyPayments.push(currMaturity)
    }
    res.send({ productInfo: paymentPlan })

}



const getAll = async (req, res) => {
    const banks = await banksModel.find().populate({path: 'houseLoans'});
    console.log(banks);
    res.json({success: true, banks})
}

module.exports = {
    housingLoan,
    housingLoanDetail,
    getAll
}