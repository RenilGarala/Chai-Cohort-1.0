// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
    // Initialize balance and transactions properties
    this.balance = balance;
    this.transactions = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
  this.balance += amount;
  this.transactions.push("Deposited "+amount);
}

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
  if(this.balance>=amount){
    this.balance -= amount;
    this.transactions.push("Withdrew "+amount);
  } else{
    this.transactions.push("Insufficient balance");
  }
}

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function(){
  return this.transactions;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { balance, transactions } = JSON.parse(input);
  const account = new BankAccount(balance);

  transactions.forEach(({ type, amount }) => {
    if (type === "deposit") account.deposit(amount);
    if (type === "withdraw") account.withdraw(amount);
  });

  process.stdout.write(JSON.stringify(account.getTransactionHistory()));
});
