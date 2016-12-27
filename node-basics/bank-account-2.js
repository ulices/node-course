// Ulices :::: Bank Account //

var accounts = [];

// createAccount

function createAccount (account) {
  accounts.push(account);
  return account;
}

// getAccount
function getAccount (username) {
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.username === username) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

// deposit
function deposit (account, amount) {
  account.balance += amount;
}

// withdraw
function withdraw (account, amount) {
  account.balance -= amount;
}

// getBalance
function getBalance (account) {
  return 'Your balance is: $' + account.balance;
}

var account = createAccount({
  username: 'Sus',
  balance: 0
});

deposit(account, 1000);
withdraw(account, 450);
console.log(getBalance(account));

var existingAccount = getAccount('Sus');

console.log(getBalance(existingAccount));

var account2 = createAccount({
  username: 'Ros',
  balance: 20
});

console.log(accounts);

var existingAccount2 = getAccount('Ros');

console.log(existingAccount2);

