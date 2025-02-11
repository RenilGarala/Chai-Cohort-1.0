// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  switch (color) {
    case "Red":
      return "Stop";
    case "Yellow":
      return "Slow Down";
    case "Green":
      return "Go";
    default:
      return "Invalid Color";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { color } = JSON.parse(input);
  const result = trafficLightAction(color);
  process.stdout.write(JSON.stringify(result));
});
