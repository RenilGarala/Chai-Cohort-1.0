// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    Object.keys(obj).forEach(key => {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });
    return obj
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj } = JSON.parse(input);
    const result = cleanObject(obj);
    process.stdout.write(JSON.stringify(result));
  });