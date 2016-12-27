var person = {
  name: 'Sus',
  age: '36'
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('----- Challenge Area ----');

var animal = '{"name": "Zeta"}';

animal = JSON.parse(animal);

console.log(typeof animal);

animal.age = '15';

animal = JSON.stringify(animal);

console.log(animal);
console.log(typeof animal);

