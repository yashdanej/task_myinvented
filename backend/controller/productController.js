const db = require('../db');
exports.Filter = (req, res) => {
    const { hsncode, page, pageSize } = req.query;
    const offset = (page - 1) * pageSize;
    try {
        const countQuery = 'SELECT count(*) as total FROM products WHERE `HSN CODE` = ? GROUP BY `HSN CODE`, `COUNTRY OF DESTINATION`';
        db.query(countQuery, [Number(hsncode)], (countErr, countResult) => {
            if (countErr) return res.send({ status: 400, success: false, msg: countErr });
            const totalRecords = countResult.length;
            const totalPages = Math.ceil(totalRecords / pageSize);
            // const q = 'SELECT `HSN CODE`, `COUNTRY OF DESTINATION` AS COUNTRY, SUM(QUANTITY) AS `SUM OF QUANTITY`, ROUND(AVG(`UNT PRICE FC`)) AS `AVG OF UNT PRICE FC`, COUNT(`COUNTRY OF DESTINATION`) AS FREQUENCY FROM products WHERE `HSN CODE` = ? GROUP BY `HSN CODE`, `COUNTRY OF DESTINATION` LIMIT ? OFFSET ?';
            const q = 'SELECT `HSN CODE`, `COUNTRY OF DESTINATION` AS COUNTRY, SUM(QUANTITY) AS `SUM OF QUANTITY`, ROUND(AVG(`UNT PRICE FC`)) AS `AVG OF UNT PRICE FC`, COUNT(`COUNTRY OF DESTINATION`) AS FREQUENCY FROM products WHERE `HSN CODE` = ? GROUP BY `HSN CODE`, `COUNTRY OF DESTINATION`';
            db.query(q, [Number(hsncode)], (err, data) => {
                if (err) return res.send({ status: 400, success: false, msg: err });
                return res.send({ status: 200, success: true, msg: "Data fetch successfully", data: data, pagination: { page, pageSize, totalPages } });
            });
        });
    } catch (error) {
        return res.send({ status: 400, success: false, msg: error.message });
    }
}

