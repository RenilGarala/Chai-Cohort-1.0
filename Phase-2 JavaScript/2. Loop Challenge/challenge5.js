// You just need to implement the countSteps function
function countSteps(targetSteps) {
  let countStep = 0;
  for (let i = 0; i < targetSteps; i++) {
    countStep++;
  }
  return countStep;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const targetSteps = parseInt(input); // Parse input as number
  // Call our function
  const result = countSteps(targetSteps);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
