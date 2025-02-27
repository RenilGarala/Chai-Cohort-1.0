// You just need to implement the removePassword function
function removePassword(user) {
    // Remove password property
    if(user.hasOwnProperty("password")){
      delete user.password;
    }
    return user
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { user } = JSON.parse(input);
    const result = removePassword(user);
    process.stdout.write(JSON.stringify(result));
  });