const express = require('express');
const sql = require('mssql');
const path = require('path');

const fs = require('fs');
const http = require('http');
const https = require('https');
const private_key = fs.readFileSync('.ssl/privkey.pem');
const certificate = fs.readFileSync('.ssl/fullchain.pem');

const credentials = { key: private_key, cert: certificate };

const config = {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_DATABASE,
    server: process.env.MSSQL_SERVER,
    trustServerCertificate: true
};

const port = process.env.EXPRESS_PORT;
const app_pool = new sql.ConnectionPool(config);
const order_router = require('./routes/orders');
const product_router = require('./routes/products');
const app = express();

app.use(express.json());
app.use('/order', order_router);
app.use('/product', product_router);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

(async () => {
    try {
        app.locals.db = await app_pool.connect();
        // app.listen(port, () => 
        //     console.log(`server listening at port ${port}...`)
        // );
        https.createServer(credentials, app).listen(443);
    } catch (error) {
        console.error('error creating connection pool', error);
    }
})();