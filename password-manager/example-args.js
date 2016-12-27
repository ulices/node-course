var argv = require('yargs')
  .command('hello', 'Greets the user', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Your first name goes here',
        type: 'String'
      },
      lastname: {
        demand: true,
        alias: 'l',
        description: 'Your last name goes here',
        type: 'String'
      }
    }).help('help');
  })
  .help('help')
  .argv;
var command = argv._[0];

console.log(argv);

//if (argv._[0] === 'hello') {
  //console.log('Hello Sus');
//}

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
    console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
  console.log('Hello World');
}

