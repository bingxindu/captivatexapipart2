function setupConfig() {
	var endpoint = 'https://lrs.adlnet.gov/xapi/';
	var user = 'xapi-tools';
	var password = 'xapi-tools';

	var conf = {
		"endpoint" : endpoint,
		"auth" : "Basic " + toBase64(user + ":" + password),
	};

	ADL.XAPIWrapper.changeConfig(conf);
}


// Configure xAPIWrapper and save credentials
setupConfig();

// Create a statement
var stmt = new ADL.XAPIStatement();

// Add 'completed Captivate leaderboard tutorial' to the statement
stmt.verb = new ADL.XAPIStatement.Verb('http://adlnet.gov/expapi/verbs/completed', 'completed');
stmt.object = new ADL.XAPIStatement.Activity('http://www.willchinda.com/blog/2015/12/06/xapi-captivate-part-2/', 'Captivate leaderboard tutorial');