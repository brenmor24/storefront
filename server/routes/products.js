const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    (async () => {
        let result = await req.app.locals.db.request()
            .execute('spFetchProducts');
        let clean = result.recordset.map((item) => (
            {...item, gallery: JSON.parse(item.gallery)})
        );
        res.status(200).json(clean);
    })();
});

module.exports = router;