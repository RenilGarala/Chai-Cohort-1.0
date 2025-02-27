// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property
    if(product.discount){
      return true
    }
    return false
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { product } = JSON.parse(input);
    const result = hasDiscount(product);
    process.stdout.write(JSON.stringify(result));
  });