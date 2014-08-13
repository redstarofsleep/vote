exports.getUsers = function(req, res) {
	res.send(users);
};

exports.getOptions = function(req, res) {
	res.send(options);
}

//人员配置
var users = [
	{part: 'other', people: [
		{phone: '67261', name: 'xxx', num: '100'},
		{phone: '62166', name: 'xxx', num: '101'},
		{phone: '68114', name: 'xxx', num: '102'},
		{phone: '68577', name: 'xxx', num: '103'},
		{phone: '60772', name: 'xxx', num: '104'},
		{phone: '66777', name: 'xxx', num: '105'},
		{phone: '66126', name: 'xxx', num: '106'},
		{phone: '62829', name: 'xxx', num: '107'},
		{phone: '69636', name: 'xxx', num: '108'},
		{phone: '61203', name: 'xxx', num: '109'},
		{phone: '69555', name: 'xxx', num: '110'},
		{phone: '67936', name: 'xxx', num: '111'},
		{phone: '68788', name: 'xxx', num: '112'},
		{phone: '68555', name: 'xxx', num: '113'}
		
	]},
	{part: 'gmsz', people: [
		{phone: '65556', name: '陈宏庆', num: '1'},
		{phone: '61585', name: '袁得', num: '2'},
		{phone: '66600', name: '贾建国', num: '3'},
		{phone: '60006', name: '徐峰', num: '4'},
		{phone: '61418', name: '徐敏', num: '5'},
		{phone: '67111', name: '江春艳', num: '6'},
		{phone: '66161', name: '闵敏', num: '7'},
		{phone: '61064', name: '柳鹏魁', num: '8'},
		{phone: '61426', name: '张菁', num: '9'},
		{phone: '63636', name: '李惠君', num: '10'},
		{phone: '65656', name: '戴海玉', num: '11'},
		{phone: '64837', name: '张瑛', num: '12'},
		{phone: '62704', name: '孙萍燕', num: '13'},
		{phone: '61697', name: '朱华', num: '14'},
		{phone: '62555', name: '周平', num: '15'},
		{phone: '63200', name: '王萍', num: '16'},
		{phone: '61566', name: '莫文英', num: '17'},
		{phone: '61086', name: '乔春霞', num: '18'},
		{phone: '69828', name: '顾建清', num: '19'},
		{phone: '68333', name: '彭永红', num: '20'},
		{phone: '67333', name: '杨犇', num: '21'},
		{phone: '60373', name: '江珊', num: '22'},
		{phone: '64443', name: '赵长宝', num: '23'},
		{phone: '63912', name: '张艳军', num: '24'},
		{phone: '67982', name: '石纯艳', num: '25'},
		{phone: '62591', name: '瞿康梅', num: '26'},
		{phone: '68989', name: '朱洁勤', num: '27'},
		{phone: '68224', name: '葛海涛', num: '28'},
		{phone: '64835', name: '王以猛', num: '29'},
		{phone: '66323', name: '何小路', num: '30'},
		{phone: '60944', name: '戴四兵', num: '31'},
		{phone: '63011', name: '申元奇', num: '32'},
		{phone: '69400', name: '肖传涛', num: '33'},
		{phone: '63284', name: '嵇祥生', num: '34'},
		{phone: '68998', name: '张峻峰', num: '35'},
		{phone: '62766', name: '汪成成', num: '36'},
		{phone: '60256', name: '钱晓奕', num: '37'},
		{phone: '61093', name: '张东梁', num: '38'},
		{phone: '62757', name: '明章星', num: '39'},
		{phone: '64176', name: '吴彦鋆', num: '40'},
		{phone: '65118', name: '徐泽励', num: '41'},
		{phone: '69141', name: '杨晓东', num: '42'},
		{phone: '66225', name: '龚永', num: '43'},
		{phone: '62083', name: '张勤', num: '44'},
		{phone: '66512', name: '马彦峰', num: '45'},
		{phone: '68137', name: '张军', num: '46'},
		{phone: '68111', name: '余方方', num: '47'},
		{phone: '66359', name: '赵保伟', num: '48'},
		{phone: '69935', name: '谈劲凤', num: '49'},
		{phone: '66098', name: '笪翔飞', num: '50'},
		{phone: '68222', name: '俞建华', num: '51'},
		{phone: '66470', name: '汪宇', num: '52'},
		{phone: '66659', name: '常云', num: '53'},
		{phone: '65680', name: '方朝进', num: '54'},
		{phone: '60808', name: '王宏伟', num: '55'},
		{phone: '60289', name: '曹长征', num: '56'},
		{phone: '68175', name: '沈固', num: '57'},
		{phone: '63852', name: '黄清', num: '58'},
		{phone: '69617', name: '陆海国', num: '59'},
		{phone: '66168', name: '陈凌', num: '60'},
		{phone: '62815', name: '马晋杰', num: '61'},
		{phone: '66036', name: '于洋溢', num: '62'},
		{phone: '63669', name: '顾孝明', num: '63'},
		{phone: '61294', name: '董栋', num: '64'},
		{phone: '61454', name: '沈佳', num: '65'},
		{phone: '67761', name: '李仓', num: '66'},
		{phone: '60333', name: '陈勇', num: '67'},
		{phone: '62111', name: '俞佳', num: '68'},
		{phone: '61114', name: '孟蕾', num: '69'},
		{phone: '60312', name: '孟蕾', num: '69'},
		{phone: '61216', name: '顾永青', num: '70'},
		{phone: '60827', name: '谢刚', num: '71'},
		{phone: '61723', name: '李智', num: '72'},
		{phone: '62391', name: '李炜', num: '73'},
		{phone: '62590', name: '陆昊晟', num: '74'},
		{phone: '63865', name: '郭若飞', num: '75'},
		{phone: '63892', name: '严文杰', num: '76'},
		{phone: '69235', name: '周方敏', num: '77'},
		{phone: '61895', name: '张潜', num: '78'},
		{phone: '60137', name: '徐凤霞', num: '79'},
		{phone: '67040', name: '周远', num: '80'},
		{phone: '63800', name: '张茂成', num: '81'},
		{phone: '63548', name: '张天飞', num: '82'},
		{phone: '68124', name: '高海涛', num: '83'},
		{phone: '65935', name: '韩月平', num: '84'},
		{phone: '66262', name: '宋斌', num: '85'},
		{phone: '66744', name: '左培恩', num: '86'},
		{phone: '67721', name: '张斌', num: '87'},
		{phone: '69814', name: '漆田田', num: '88'},
		{phone: '69302', name: '曹煜', num: '89'},
		{phone: '69113', name: '邵锐敏', num: '90'},
		{phone: '68168', name: '于宏俊', num: '91'},
		{phone: '67962', name: '张明', num: '92'},
		{phone: '62133', name: '汪东升', num: '93'}
	]}
];

// 奖项配置
var options = [
	{id: "1", name: '幸运奖', total: 30, count: 5, counts: [1,2,3,4,5], groups: [1,2,3,4,5,6], distribute: [
		/*{dep: 'gmsz', size: 4, already: 0},
		{dep: 'other', size: 2, already: 0},
		{dep: 'gmsz', size: 6, already: 0},
		{dep: 'other', size: 3, already: 0},
		{dep: 'gmsz', size: 3, already: 0},
		{dep: 'other', size: 5, already: 0},
		{dep: 'gmsz', size: 7, already: 0},
		{dep: 'other', size: 4, already: 0},
		{dep: 'gmsz', size: 5, already: 0},
		{dep: 'other', size: 3, already: 0},
		{dep: 'gmsz', size: 5, already: 0},*/
		{dep: 'gmsz', size: 5, already: 0},
		{dep: 'other', size: 1, already: 0},
		{dep: 'gmsz', size: 4, already: 0},
		{dep: 'gmsz', size: 4, already: 0},
		{dep: 'other', size: 1, already: 0},
		{dep: 'gmsz', size: 5, already: 0},
		{dep: 'gmsz', size: 3, already: 0},
		{dep: 'other', size: 1, already: 0},
		{dep: 'gmsz', size: 6, already: 0}
	]},
	{id: 2, name: '三等奖', total: 6, count: 2, counts: [1,2], groups: [1,2,3], distribute: [
		/*{dep: 'other', size: 1, already: 0},
		{dep: 'gmsz', size: 4, already: 0},*/
		{dep: 'gmsz', size: 6, already: 0}
	]},
	{id: 3, name: '二等奖', total: 3, count: 1, counts: [1], groups: [1,2,3], distribute: [
		/*{dep: 'gmsz', size: 2, already: 0},*/
		{dep: 'gmsz', size: 3, already: 0}
	]},
	{id: 4, name: '一等奖', total: 1, count: 1, counts: [1], groups: [1], distribute: [
		{dep: 'gmsz', size: 1, already: 0}
	]},
	{id: 5, name: '特等奖', total: 1, count: 1, counts: [1], groups: [1], distribute: [
		{dep: 'gmsz', size: 1, already: 0}
	]}
];

// 需要排除的黑名单
var blacks = ['000'];