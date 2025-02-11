// You just need to implement the findPhone function
function findPhone(items) {
    // Return the index of "Phone" in the items array
    let index = items.indexOf("Phone");
    return index;
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain items
  const { items } = JSON.parse(input);

  // Call our function
  const result = findPhone(items);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
