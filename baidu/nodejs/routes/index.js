var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var orm = require('orm');
var dbs = require('../database/dbs.js')(router);


// 通过post查询并返回数据
    // function ,function 将第一个函数的结果返回到第二个函数   
router.post('/select', dbs.selectData, function(req, res) {
    res.send(res.locals.NewsInfo);

});

// var dateTime=moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
/* 百度新闻主页. */
router.get('/news', function(req, res, next) {
  res.render('news.ejs');
});

// 百度新闻后台主页
router.get('/admin',function(req,res,next){
	res.render('admin.ejs');
})



// 通过post查询并返回更新数据
router.post('/update', dbs.updateData, function(req, res) {
    // log = new Log('update', stream);
    // console.log(log);
    res.send(res.locals.NewsInfo);
});

// 增加功能的实现
router.post('/insert', dbs.insertData, function(req, res) {
    res.send(res.locals.NewsInfo);
});

// 通过post删除数据
router.post('/delete', dbs.deleteData, function(req, res) {
    res.send(res.locals.NewsInfo);
});

module.exports = router;
