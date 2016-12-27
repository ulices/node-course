// Ulices :::: Bank Account //

var account = {
  balance: 0
};
var balance = 0;

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

deposit(account, 1000);
deposit(account, 20);
withdraw(account, 5);
deposit(account, 25);
deposit(account, 25);
withdraw(account, 35);
withdraw(account, 375);

balance = getBalance(account);

console.log(balance);
