var mysql = require('mysql');

var connection = mysql.createConnection({
	host : '192.168.18.96',
	database : 'votedev',
	user : 'votedev',
	password : '123456'
});
connection.connect();
exports.query = function(sql, param, fun) {
	
	connection.query(sql, function(err, rows, fields) {
		fun(rows);
	});
	// connection.end();
};