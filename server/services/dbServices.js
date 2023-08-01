const houseLoansModel = require('../database/Schemas/HouseLoans');
const banksModel = require('../database/Schemas/Banks');

const filteredHouseLoans = async (amount, maturity) => {
    return houseLoansModel.find({ 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: '-_id -houseLoans' });

};

module.exports = {
    filteredHouseLoans
}