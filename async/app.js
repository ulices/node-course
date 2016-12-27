var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
  .option('location', {
    alias: 'l',
    description: 'Location to fetch weather for',
    type: 'String'
  })
  .help('help')
  .argv;

if (typeof argv.location !== 'undefined' && argv.l.length > 0) {
  console.log('Location was provided');

  //weather(argv.location, function (currentWeather) {
    //console.log(currentWeather);
  //});

  weather(argv.location).then(function (currentWeather) {
    console.log(currentWeather);
  }).catch(function (error) {
    console.log(error);
  });

} else {
  console.log('Location was not provided');

  //location(function (location) {
    //if (location) {
      ////weather(location.city, function (currentWeather) {
        ////console.log(currentWeather);
      ////});
      //weather(location.city).then(function (currentWeather) {
        //console.log(currentWeather);
      //});
    //} else {
      //console.log('Unable to guess location');
    //}
  //});

  location().then(function (location) {
    return weather(location.city);
  }).then(function (currentWeather) {
    console.log(currentWeather);
  }).catch(function (error) {
    console.log(error);
  });
}
