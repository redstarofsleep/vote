var mysql = require('mysql');

var pool = mysql.createPool({
	host: '192.168.18.96',
	database: 'votedev',
	user: 'votedev',
	password: '123456'
});

exports.query = function(sql, param, fun) {
	pool.getConnection(function(err, connection) {
		connection.query(sql, param, function(err, rows, fields) {
			fun(rows);
			connection.release();
		});
	});
};