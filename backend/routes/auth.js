const express = require('express');
const router = express.Router();
const connction = require('../config/db');


// Create User using : POST "/api/auth/"
router.post('/', (req, res) => {
    const user = req.body;
    const userDate = [user.fname, user.email, user.password, user.date]

    if (!user.fname) {
        return res.send('Fullname require')
    }
    if (!user.email) {
        return res.send('Email require')
    }
    if (!user.password) {
        return res.send('Password require')
    }
    connction.query("INSERT INTO user (fname, email, password, date) values(?)", [userDate], (err, rows) => {
        if (err) throw new Error
        res.send(rows)
    })

})

module.exports = router;