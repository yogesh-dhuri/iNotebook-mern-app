const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dhuri',
    password: '123456',
    database: 'inotebook'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;

