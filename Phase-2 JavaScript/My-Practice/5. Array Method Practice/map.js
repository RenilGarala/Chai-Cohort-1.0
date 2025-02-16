// Characteristics of Map 
// -> does not modify the original array
// -> returns a new array
// -> takes a callback function as an argument
// -> total 3 argument : 1. element 2. index 3. array

let arr = [1,2,3,4,5,6,7,8,9,10];
let names = ["renil", "ram", "rohit sharma", "rohan"];


//Q-1 Given an array of numbers, use the map method to return a new array where each number is doubled.

let doubleArr = arr.map((e)=>{
    return e*2;
})
console.log(doubleArr);

//Q-2 Given an array of strings, use the map method to return a new array containing the length of each string.

let stringLength = names.map((e)=>{
    return e.length;
})
console.log(stringLength);

//Q-3 Given an array of numbers, use the map method to convert each number into a string prefixed with a #.

let numberTOString = arr.map((e)=>{
    return e.toString();
})
console.log(numberTOString);

//Q-4 Given an array of objects representing students with properties { name, marks }, use the map method to return a new array containing only the students' names.

let students = [
    {
        name: "Renil",
        marks: 20,
    },
    {
        name: "Ram",
        marks: 25,
    },
    {
        name: "Rohit",
        marks: 30,
    },
]
let studentNamaes = students.map((e)=>{
    return e.name;
})
console.log(studentNamaes);

//Q-5 Given an array of temperatures in Celsius, use the map method to convert them to Fahrenheit using the formula (C * 9/5) + 32.

let celsius = [30,35,40,45,10];

let fahrenheit = celsius.map((e)=>{
    return (e * 9/5) + 32;
})
console.log(fahrenheit);

//Q-6 Given an array of strings, use the map method to capitalize the first letter of each string.

let capitalizeFirstLetter = names.map((e)=>{
    return e.charAt(0).toUpperCase()+e.slice(1);
})
console.log(capitalizeFirstLetter);

//Q-7 Given an array of numbers, use the map method to return a new array where even numbers are multiplied by 2 and odd numbers are multiplied by 3.

let numberEvenOdd = arr.map((e)=>{
    if(e%2==0){
        return e*2;
    }
    return e*3;
})
console.log(numberEvenOdd);

//Q-8 Given an array of prices, use the map method to apply a 10% discount to each price and return the new discounted prices.

let price = [100,200,250,300,350,130,70];

let discount = price.map((e)=>{
    return e -= e/10;
})
console.log(discount);


//Q-9 Given an array of words, use the map method to return an array containing the words in uppercase.

let uppercaseWords = names.map((e)=>{
    return e.toUpperCase();
})
console.log(uppercaseWords);

//Q-10 Given an array of user objects { id, name, email }, use the map method to return a new array of objects containing only { id, email }.

let user = [
    {
        id: 1,
        name: "renil",
        email: "renil@gmail.com"
    },
    {
        id: 2,
        name: "rohit",
        email: "rohit@gmail.com",
    },
    {
        id: 3,
        name: "ram",
        email: "ram@gmail.com",
    }
]
let newUser = user.map((e)=>{
    let temp = {
        id : e.id,
        name: e.name,
    }
    return temp;
})

console.log(newUser);
