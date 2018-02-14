// Run with command 'node app.js'
// Send http request to 'localhost:3000/?url=URL_HERE'

const http = require('http');
const url = require('url');

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '41ed8053-66b8-47b6-8ce4-5af4a47e2bc5',
  'password': '6XAjN4OylynE',
  'version_date': '2017-02-27'
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  var queryObject = url.parse(req.url, true).query;
  var parameters = {
	'url': queryObject.url,
	'features': {
      'sentiment': {},
      // 'emotion': {},
      'keywords': 
      {
          'sentiment':true,
      }
	}
  };
  var result = '{}';
  natural_language_understanding.analyze(parameters, function(err, response) {
	if (err)
	  console.log('error:', err);
	else
      result = JSON.stringify(response, null, 2);
      console.log(result);
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'application/json');
	  res.end(result);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
