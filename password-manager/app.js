console.log('starting password manager');

// Encrypt/Decrypt
var crypto = require('crypto-js');

// Init storage
var storage = require('node-persist');
storage.initSync();

// Create commands
var argv = require('yargs')
  .command('create', 'Creates a new account', function (yargs) {
    yargs.options({
      name: {
        type: 'String',
        demand: true,
        alias: 'n',
        descriptin: 'Account name (eg: Twitter, Facebbok)'
      },
      username: {
        type: 'String',
        demand: true,
        alias: 'u',
        descriptin: 'Account username or email'
      },
      password: {
        type: 'String',
        demand: true,
        alias: 'p',
        descriptin: 'Account password'
      },
      masterPassword: {
        type: 'String',
        demand: true,
        alias: 'm',
        descriptin: 'Master password'
      }
    }).help('help');
  })
  .command('get', 'Retrive an existing account by name', function (yargs) {
    yargs.options({
      name: {
        type: 'String',
        demand: true,
        alias: 'n',
        descriptin: 'Your account name goes here'
      },
      masterPassword: {
        type: 'String',
        demand: true,
        alias: 'm',
        descriptin: 'Master password'
      }
    }).help('help');
  })
  .help('help')
  .argv;
var command = argv._[0];

function getAccounts (masterPassword) {
  var encryptedAccounts = storage.getItemSync('accounts');
  var accounts = [];

  if (typeof encryptedAccounts !== 'undefined') {
    var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
    accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }

  return accounts;
}

function saveAccounts (accounts, masterPassword) {
  var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);

  storage.setItemSync('accounts', encryptedAccounts.toString());

  return accounts;
}

// account { name: Facebook, username: sus, password: 123qewrasd }
function createAccount (account, masterPassword) {
  var accounts = getAccounts(masterPassword);

  accounts.push(account);
  saveAccounts(accounts, masterPassword);

  return account;
}

function getAccount (accountName, masterPassword) {
  var accounts = getAccounts(masterPassword);
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

if (command === 'create') {
  try {
    createAccount({
      name: argv.name,
      username: argv.username,
      password: argv.password
    }, argv.masterPassword);

    console.log('Account was successfully created!');
  } catch (e) {
    console.log('Unable to create account.');
  }
}

if (command === 'get') {
  try {
    var account = getAccount(argv.name, argv.masterPassword);

    if (typeof account === 'undefined') {
      console.log('Account not found');
    } else {
      console.log('Account found!');
      console.log(account);
    }
  } catch (e) {
    console.log('Unable to fetch account.');
  }
}

