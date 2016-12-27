//setTimeout(function () {
  //console.log('1');
//}, 2000);

//setTimeout(function () {
  //console.log('3');
//}, 1000);

//console.log('2');

var url = 'http://api.openweathermap.org/data/2.5/weather?appid=820354296de3998e27513b71b29da109&q=' +
  encodedLocation +
  '&units=imperial';

console.log('Challenge');

function printInTwoSeconds (message) {
  setTimeout(function () {
    console.log(message);
  }, 2000);
}

printInTwoSeconds('Hello Sus');

