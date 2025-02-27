// Characteristics of reduce method
// -> does Not Modify the Original Array
// -> returns a Single Value
// -> use accumulator variable that stores the accumulated result
// -> take an optional initial value

let numbers = [1, 2, 3, 4, 5, 6, 3, 7, 8, 9, 3];
let names = ["renil", "ram", "rohit sharma", "rohan"];

// 1. Given an array of numbers, use the reduce method to find the sum of all elements.

let sum = numbers.reduce((acc, e) => {
  return acc + e;
}, 0);
console.log(sum);

// 2. Given an array of numbers, use the reduce method to find the multiplying of all elements.

let multiplyingNumber = numbers.reduce((acc, e) => {
  return acc * e;
}, 1);
console.log(multiplyingNumber);

// 3. Given an array of strings, use the reduce method to concatenate all strings into a single string.

let nameString = names.reduce((acc, e) => {
  return acc + e;
}, "");
console.log(nameString);

// 4. Given an array of objects representing items { name, price }, use the reduce method to calculate the total price of all items.

let items = [
  {
    name: "chair",
    price: 3000,
  },
  {
    name: "table",
    price: 5500,
  },
  {
    name: "laptop",
    price: 120000,
  },
];
let totalPriceItem = items.reduce((acc, x) => {
  return acc + x.price;
}, 0);
console.log(totalPriceItem);

// 5. Given an array of numbers, use the reduce method to find the maximum number in the array.

let maximumNumber = numbers.reduce((acc, element) => {
  if (acc < element) {
    acc = element;
  }
  return acc;
}, numbers[0]);
console.log(maximumNumber);

// 6. Given an array of numbers, use the reduce method to find the minimum number in the array.

let minimumNumber = numbers.reduce((acc, element) => {
  if (acc > element) {
    acc = element;
  }
  return acc;
}, numbers[0]);
console.log(minimumNumber);

// 7. Given an array of student objects { name, marks }, use the reduce method to calculate the average marks of all students.

let student = [
  {
    name: "renil",
    marks: 30,
  },
  {
    name: "rohit",
    marks: 40,
  },
  {
    name: "ram",
    marks: 80,
  },
];
let averageMark = student.reduce((acc, element) => {
    return acc + element.marks;
}, 0) / student.length;

console.log(averageMark);

// 8. Given an array of numbers, use the reduce method to count how many times a specific number appears in the array.
let targetNumber = 3
let count = numbers.reduce((acc, e)=>{
    if(e===targetNumber){
        acc++;
    }
    return acc
},0);
console.log(count);

// 9. Given an array of words, use the reduce method to return an object where the keys are words and values are their frequencies in the array.


// 10. Given an array of transactions { type: "credit" | "debit", amount }, use the reduce method to calculate the final account balance (credits add to the balance, debits subtract).
let transactions = [
    { 
        type: "credit", 
        amount: 1000,
    },
    {
        type: "debit", 
        amount: 200 
    },
    { 
        type: "credit",
        amount: 500,
    },
    { 
        type: "debit", 
        amount: 300,
    },
];
let amount = transactions.reduce((acc, e)=>{
    return e.type==="credit" ? acc = acc+e.amount : acc = acc-e.amount;
},0);
console.log(amount);