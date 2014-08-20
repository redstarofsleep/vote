var url = require('url');
var db = require('../utils/db');

exports.voteList = function(req, res) {
	db.query('select * from vote', [], function(rows) {
		res.send(rows);
	});
};

exports.itemList = function(req, res) {
	var voteId = url.parse(req.url, true).query.voteId;
	db.query('select * from voteitem where voteId=?', [voteId], function(rows) {
		res.send(rows);
		console.log(rows);
	});
};