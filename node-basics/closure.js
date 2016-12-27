function greetMaker (name) {
  function greet () {
    console.log('Hello ' + name + '!');
  }

  return greet;
}

var greetSus = greetMaker('Sus');

greetSus();

var greetWorld = greetMaker('World');

greetWorld();

//========//


function createAdder (baseNumber) {
  return function (numberToAdd) {
    return baseNumber + numberToAdd;
  };
}

var addTen = createAdder(10);

console.log(addTen(2));
console.log(addTen(0));
console.log(addTen(4.5));

