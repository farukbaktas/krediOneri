require('dotenv').config();
require('./database/dbConnection');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const calc = require('./utils/calcMonthlyPayment');
app.use(require('cors')());
app.use('/api', apiRoutes);
const banksSchema = require('./database/Schemas/Banks');
const consumerLoansSchema = require('./database/Schemas/ConsumerLoans');
const houseLoansSchema = require('./database/Schemas/HouseLoans');
const bankObjectId = '64b9f1b250e5769022f8771c';
const consumerLoans = [
    {
        bank: bankObjectId,
        creditName: 'Hoş Geldin Kredisi',
        creditAmount: {
            min: 1,
            max: 50000
        },
        creditTerm: {
            min: 3,
            max: 36
        },
        interestRate: 1.99
    },
    {
        bank: bankObjectId,
        creditName: 'Hoş Geldin Kredisi',
        creditAmount: {
            min: 50001,
            max: 100000
        },
        creditTerm: {
            min: 3,
            max: 24
        },
        interestRate: 1.99
    },
    {
        bank: bankObjectId,
        creditName: 'Hoş Geldin Kredisi',
        creditAmount: {
            min: 100001,
            max: 200000
        },
        creditTerm: {
            min: 3,
            max: 12
        },
        interestRate: 1.99
    },
];

(async () => {
//     const bank = await banksSchema.findById(bankObjectId);
//     consumerLoansSchema.insertMany(consumerLoans)
//         .then(m => {
//             for (const x of m) {
//                 bank.consumerLoans.push(x);
//             }
//             bank.save()
//         })
})();

app.listen(process.env.SERVER_PORT, () => console.log(`${process.env.SERVER_PORT} portu dinleniyor.`));

