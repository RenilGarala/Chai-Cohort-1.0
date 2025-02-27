// You need to implement the Animal constructor function and its prototype method
Animal.prototype.makeSound = function(){
    return "Some generic sound";
  }
  
  function Animal(name) {
      // Initialize name property
      this.name=name;
  }
  
  // Define makeSound method on Animal's prototype
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { name } = JSON.parse(input);
    const animal = new Animal(name);
    process.stdout.write(JSON.stringify(animal.makeSound()));
  });
  