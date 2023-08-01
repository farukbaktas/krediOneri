const router = require('express').Router();
const { housingLoan, housingLoanDetail, getAll } = require('../controller/apiController');
router.get('/housingloan', housingLoan);

router.get('/housingloan/detail', housingLoanDetail);

router.get('/getall', getAll)

module.exports = router;