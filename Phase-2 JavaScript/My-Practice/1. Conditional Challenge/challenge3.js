// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
  // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { age } = JSON.parse(input);
  const result = checkVotingEligibility(age);
  process.stdout.write(JSON.stringify(result));
});
