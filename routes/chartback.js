/**
 * Created by retixi on 2016/11/18.
 */

var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('sqldb');
var substr=""
var countsum_by_date="SELECT pubdate,sum(count)as count FROM saleslist group by pubdate order by pubdate"
var pricesum_by_name="SELECT name,sum(price) as price FROM saleslist group by name"
var pricesum_by_area="SELECT area,sum(price) as price FROM saleslist group by area"
var pricesum_by_cate="SELECT cate,sum(price) as price FROM saleslist group by cate"

var countsum_by_date_post="SELECT pubdate,sum(count)as count FROM saleslist group by pubdate order by pubdate"
var pricesum_by_name_post="SELECT name,sum(price) as price FROM"+substr+" saleslist group by name"
var pricesum_by_area_post="SELECT area,sum(price) as price FROM saleslist group by area"
var pricesum_by_cate_post="SELECT cate,sum(price) as price FROM saleslist group by cate"

db.all(countsum_by_date,function (err,rows1) {
    db.all(pricesum_by_name,function (err,rows2) {
        db.all(pricesum_by_area,function (err,rows3) {
            db.all(pricesum_by_cate,function (err,rows4) {
                router.get('/',function (req,res) {
                    res.render('chart.html',{countsum_by_date:rows1,
                        pricesum_by_name:rows2,
                        pricesum_by_area:rows3,
                        pricesum_by_cate:rows4})
                })

                console.log(rows2);
                console.log(rows3);
            })
        })
    })
})
module.exports = router;