exports.voteList = function(req, res) {
	var voteList = [
		{id: 1, title: 'abc'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'},
		{id: 1, title: 'bcd'}
	];
	res.send(voteList);
};