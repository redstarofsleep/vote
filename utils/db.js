var mysql = require('mysql');

var pool = mysql.createPool({
	host: '192.168.18.96',
	database: 'votedev',
	user: 'votedev',
	password: '123456'
});

exports.query = function(sql, param, fun) {
	// pool.query(sql, param, function(err, rows, fields) {
	// 	fun(rows);
	// });
	pool.getConnection(function(err, connection) {
		connection.connect();
		connection.query(sql, param, function(err, rows, fields) {
			fun(rows);
			connection.release();
		});
	});
};