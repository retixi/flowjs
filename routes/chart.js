
var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('sqldb');


db.all("SELECT pubdate,COUNT(count)as count FROM saleslist group by pubdate",function (err,rows) {
    router.get('/',function (req,res) {
        console.log(rows)
        res.render('chart.html',{datas:rows
        })
    })
})
module.exports = router;