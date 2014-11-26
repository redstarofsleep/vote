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

// todo ***Just test
exports.doVote = function(req, res) {
	console.log(req.body);
	var data = req.body;
	data.userId = req.cookies.user;
	db.insert('insert into voteitem set ?', data, function(id) {
		console.log(id);
	})
};