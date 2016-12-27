var name = 'sus';

//name = undefined;

console.log(name);

function doesNothing (age) {
  console.log(age);
}

console.log(doesNothing());

doesNothing();

if (typeof x === 'undefined') {
  console.log('x is undefined');
}


function greetUser (name) {
  if (typeof name === 'undefined') {
    console.log('Hello World!');
  } else {
    console.log('Hi ' + name);
  }
}

greetUser(name);
greetUser();
