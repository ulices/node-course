//function doWork (data, callback) {
  //callback('done');
  //callback('done second');
//}

//function doWorkPromise (data) {
  //return new Promise(function (resolve, reject) {
    //setTimeout(function () {
      //reject('everything is brokend!');
    //}, 1000);

    ////reject({
      ////error: 'something bad happened'
    ////});
  //});
//}


//doWorkPromise('some data').then(function (data) {
  //console.log(data);
//}, function (error) {
  //console.log(error);
//});

var request = require('request');

function getWeather (location) {
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
      } else if (body.cod === 200) {
        resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
      } else {
        reject('Response code: ' + body.cod + ' ' + body.message);
      }
    });

  });
}

getWeather('new york').then(function (currentWeather) {
  console.log(currentWeather);
}, function (error) {
  console.log(error);
});

