function shinyDiamondRug(n) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let stars = 2 * i - 1;
    for (let j = 0; j < spaces; j++) {
      pattern += " ";
    }
    for (let j = 0; j < stars; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    let spaces = n - i;
    let stars = 2 * i - 1;
    for (let j = 0; j < spaces; j++) {
      pattern += " ";
    }
    for (let j = 0; j < stars; j++) {
      pattern += "*";
    }
    if (i !== 1) {
      pattern += "\n";
    }
  }
  return pattern;
}

// You just need to implement the shinyDiamondRug function
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = parseInt(input.trim(), 10); // Get the number input
  const result = shinyDiamondRug(n); // Call our function
  process.stdout.write(result); // Output the result
});
