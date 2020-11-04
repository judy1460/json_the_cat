const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=Siberian.string', function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  console.log(typeof body);

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});
