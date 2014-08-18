var db = require('../utils/db');

exports.voteList = function(req, res) {
	db.query('select * from vote', [], function(rows) {
		res.send(rows);
	});
};

exports.itemList = function(req, res) {
	db.query('select * from voteitem where voteId=?', [], function(rows) {
		res.send(rows);
	})
}