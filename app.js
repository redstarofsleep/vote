var express = require('express');
var http = require('http');

var vote = require('./routes/vote');

var app = express();

app.use(express.bodyParser());
app.use('/public', express.static('public'));

/**
 * 全局过滤器
 */
app.all('/vote/*', function(req, res, next) {
	console.log('*******' + req.path);
	next();
});


/**
 * Receive http request
 */
app.get('/vote/list', vote.voteList);

app.listen(8080);
