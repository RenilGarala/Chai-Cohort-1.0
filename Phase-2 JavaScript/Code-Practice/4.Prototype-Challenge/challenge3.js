// You need to implement the Counter constructor function and its prototype methods

function Counter() {
    // Initialize count property
    this.count=0;
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function(){
  return this.count+=1;
}
// Define decrement method on Counter's prototype
Counter.prototype.decrement = function(){
  return this.count-=1;
}
// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { action } = JSON.parse(input);
  const counter = new Counter();

  if (action === "increment") {
    counter.increment();
  } else if (action === "decrement") {
    counter.decrement();
  }

  process.stdout.write(JSON.stringify(counter.count));
});
