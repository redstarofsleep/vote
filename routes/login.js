var url = require('url');
var db = require('../utils/db');

exports.login = function(req, res) {
	var username = req.body.username;
	db.query('select * from voteuser where username=?', [username], function(rows) {
		// res.send(rows);
		console.log(rows.length);
		if (rows != null && rows.length > 0) {
			res.cookie('user',  rows[0].id);
			res.send({resultType: 'ok', resultValue: true});
		} else {
			res.send({resultType: 'ng', resultValue: false});
		}
		
	});
}