// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath

    let keys = keyPath.split('.');
    let current = obj;

    for(let key of keys){
        if(current[key]===undefined){
            return "Key not found"
        }
        current = current[key]
    }

    return current;
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj, keyPath } = JSON.parse(input);
    const result = getNestedValue(obj, keyPath);
    process.stdout.write(JSON.stringify(result));
  });