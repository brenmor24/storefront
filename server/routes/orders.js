const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.get('/', (req, res) => {
    req.app.locals.db.query('SELECT * FROM Products', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('SERVER ERROR');
            return;
        }
        res.status(200).json(result.recordset);
        console.log(result.recordset);
    });
});

router.post('/submit', (req, res) => {
    const data = req.body;

    const table = new sql.Table('Customer');
    const columns = ['first_name', 'last_name', 'email', 'phone_number',
        'address_first', 'address_second', 'city', 'state_code', 'zipcode'];

    for (const column of columns) {
        table.columns.add(column, sql.VarChar(32), {nullable: false});
    }

    const args = [data.first, data.last, data.email, data.phone, data.addr1,
        data.addr2, data.city, data.state, data.zip];

    table.rows.add(...args);

    


});

module.exports = router;