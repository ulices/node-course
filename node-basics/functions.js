function greetUser (name, lastName) {
  //console.log('Hello ' + name + ' ' + lastName + '!');

  return 'Hello ' + name + ' ' + lastName + '!';
}

var greeting = greetUser('Sus', 'Cass');
console.log(greeting);

greeting = greetUser('Rosy', 'M');
console.log(greeting);


function add (a, b) {
  var result = a + b;

  return result;
}

result = add(10, 46);
console.log(result);

console.log(add(1, 3));
