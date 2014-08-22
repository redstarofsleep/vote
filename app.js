var express = require('express');
var http = require('http');

var vote = require('./routes/vote');

var app = express();
var server = require('http').createServer(app);
server.listen(8080);

var appRootPath = '/vote';
exports.getRootPath = appRootPath;

app.use(express.bodyParser());
app.use(appRootPath + '/public', express.static('public'));

/**
 * 全局过滤器
 */
app.all('/vote/*', function(req, res, next) {
	console.log('*******' + req.path);
	req.setEncoding('utf8');
	next();
});


/**
 * Receive http request
 */
app.get('/vote/list', vote.voteList);
// test
app.get('/vote/itemlist', vote.itemList);
