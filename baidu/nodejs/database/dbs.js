var express = require('express');
var orm = require('orm');


//链接数据库phplesson
module.exports = function(router) {
    router.use(orm.express("mysql://root:@localhost/phplesson", {
        define: function(db, models, next) {
            //定义熟路库类型
            models.NewsInfo = db.define("news", {
                id: Number,
                title: String,
                descrip:String,
                content_url: String,
                pic_url: String,
                time: Date,
                classfy: ['modify', 'baijia']
            });
            next();
        }
    }));

    //对数据库进行增删改查
    var dbs = {
        // 增加数据库内容
        insertData: function(req, res, next) {
            // console.log(req.body)
            req.models.NewsInfo.create({
                    title: req.body.title,
                    descrip:req.body.descrip,
                    content_url: req.body.content_url,
                    pic_url: req.body.pic_url,
                    time: req.body.time,
                    classfy: req.body.classfy
                },
                function(err, NewsInfo) {
                    if (err) 
                        return console.error('Connection error: ' + err);
                    res.locals.NewsInfo = {
                        'result': '插入成功！'
                    };
                    next();
                });
        },

        //修改数据库数据
        updateData: function(req, res, next) {
            
            req.models.NewsInfo.find({
                id: req.body.id
                },
                function(err, NewsInfo) {
                    if (err) 
                        return console.error('Connection error: ' + err);
                    NewsInfo[0].title = req.body.title;
                    NewsInfo[0].descrip=req.body.descrip;
                    NewsInfo[0].content_url = req.body.content_url;
                    NewsInfo[0].pic_url = req.body.pic_url;
                    NewsInfo[0].time = req.body.time;

                    NewsInfo[0].save(function(err) {
                        if (err) 
                            return console.error('Connection error: ' + err);
                        res.locals.NewsInfo = {
                            'result': '修改成功'
                        }
                        next()
                    });
                });

        },

        //删除数据
        deleteData: function(req, res, next) {
            req.models.NewsInfo.find({
                id: req.body.id
            }, function(err, NewsInfo) {
                if (err)
                    return console.error('Connection error: ' + err);

                NewsInfo[0].remove(function(err) {
                    if (err) 
                        return console.error('Connection error: ' + err);
                    res.locals.NewsInfo = {
                        'result': "数据删除成功"
                    };
                    next();
                });
            });
        },

        // 查询数据,通过传送不同的id和classfy来达到查询数据
        selectData: function(req,res,next) {
            var seletejson;

            if (req.body.id == undefined) {
                seletejson = {
                    classfy: req.body.classfy
                };
            } else {
                seletejson = {
                    id: req.body.id
                };
            }

            req.models.NewsInfo.find(seletejson, function(err, NewsInfo) {
                if (err) throw err;

                // console.log(NewsInfo);

                res.locals.NewsInfo = NewsInfo;
                next();
            });
        }
    };

    return dbs;
}
