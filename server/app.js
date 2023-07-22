require('dotenv').config();
require('./database/dbConnection');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(require('cors')());
app.use('/api', apiRoutes);


app.listen(process.env.SERVER_PORT, () => console.log(`${process.env.SERVER_PORT} portu dinleniyor.`));

