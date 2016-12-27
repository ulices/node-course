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
  //var i = 0;

  //while (i < accounts.length) {
    //if (accounts[i].username === username) {
      //matchedAccount = accounts[i];
    //}
    //i++;
  //}

  for (var i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) {
      matchedAccount = accounts[i];
    }
  }

  return matchedAccount;
}

// deposit
function deposit (account, amount) {
  if (typeof amount === 'number') {
    account.balance += amount;
  } else {
    console.log('Deposit failed. Amount is not a number');
  }
}

// withdraw
function withdraw (account, amount) {
  if (typeof amount === 'number') {
    account.balance -= amount;
  } else {
    console.log('Withdraw failed. Amount is not a number');
  }
}

// getBalance
function getBalance (account) {
  return 'Your balance is: $' + account.balance;
}

function createBalanceGetter (account) {
  return function () {
    return account.balance;
  };
}

createAccount({
  username: 'Sus',
  balance: 1000
});

var susAccount = getAccount('Sus');

deposit(susAccount, 450);
withdraw(susAccount, 250);

deposit(susAccount, '300');
withdraw(susAccount, '250');

console.log(getBalance(susAccount));

var getSusBlance = createBalanceGetter(susAccount);
console.log(getSusBlance());

