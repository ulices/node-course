var person = {
  gender: 'male',
  'eyeColor': 'brown'
};

var firstNameProperty = 'firstName';

person[firstNameProperty] = 'Sus';
person.lastName = 'Cass';
person.age = 36;

delete person.age;

console.log(person);

function greetUser (person) {
  console.log('Hello ' + person.firstName + ' ' + person['lastName']);
}


greetUser(person);

var pet = {
  name: 'Zeta',
  type: 'Dog'
};

function printPet (pet) {
  console.log('You have a ' + pet.type + ' named ' + pet.name);
}

printPet(pet);

