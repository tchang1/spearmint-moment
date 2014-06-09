var schedule = require('node-schedule');
var daily = require('./daily');

var rule = new schedule.RecurrenceRule();
rule.minute = [25,26,27,28,29];

var job= schedule.scheduleJob(rule,function() {
	console.log('Job executed');
});
