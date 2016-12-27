var request = require('request');

module.exports = function (location) {
  return new Promise(function (resolve, reject) {
    var encodeLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?' +
      'appid=820354296de3998e27513b71b29da109&q=' +
      encodeLocation + ',mx&units=metric';

    if (!location) {
      return reject('No location provided');
    }

    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch weather.');
      } else {
        //console.log(JSON.stringify(body, null, 4));
        resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
      }
    });
  });
};

