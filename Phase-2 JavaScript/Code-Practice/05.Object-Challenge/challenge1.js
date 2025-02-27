// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    typeof grade !== "string" ||
    age <= 5 ||
    name === ""
  ) {
    return "Invalid input";
  } else {
    const student = {
      name: name,
      age: age,
      grade: grade,
    };

    return student;
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { name, age, grade } = JSON.parse(input);
  const result = createStudentProfile(name, age, grade);
  process.stdout.write(JSON.stringify(result));
});
