var url = require('url');
var querystring = require('querystring');

var parasedObject = url.parse('http://www.naver.com');

console.log(querystring.parse(parasedObject));
