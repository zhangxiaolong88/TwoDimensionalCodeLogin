/*jslint node: true */
'use strict';
var path = require('path'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express();

app.use(express.favicon());
app.use(express.logger('dev'));
// 可以解析ajax、form 提交的请求
app.use(express.bodyParser());
// 可以接受put delete 提交的请求
app.use(express.methodOverride());
// 开启session
app.use(express.cookieParser('my secret here'));
app.use(express.session());
// 开启路由功能
app.use(app.router);
// 捕捉错误
app.use(express.errorHandler());

// 静态文件
app.use(express.static(path.join(__dirname, './public')));

// 注册路由
require("./server/router")(app);

// mongo
var mongodb = mongoose.connect("mongodb://localhost/twoDimensionalCodeLogin");

module.exports = app;