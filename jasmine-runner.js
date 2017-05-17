var path = require('path'),
    Jasmine = require('./node_modules/jasmine/lib/jasmine.js'),
	Reporters = require('jasmine-reporters');

var jasmine = new Jasmine();
jasmine.loadConfigFile('jasmine.json');

var reporter = new Reporters.JUnitXmlReporter({
	savePath: path.join(__dirname, './test-results'),
	filePrefix: 'api-test-results',
	consolidateAll: true
});

jasmine.addReporter(reporter);
jasmine.execute();