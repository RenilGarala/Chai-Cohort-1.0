// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.name = name;
    this.position = position;
    this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function(bonus){
  return this.salary += (this.salary*bonus/100);
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name, position, salary, bonus } = JSON.parse(input);
  const employee = new Employee(name, position, salary);
  employee.applyBonus(bonus);
  process.stdout.write(JSON.stringify(employee.salary));
});
