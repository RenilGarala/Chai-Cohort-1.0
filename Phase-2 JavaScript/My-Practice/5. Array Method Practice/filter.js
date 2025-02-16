// Characteristics of filter 
// -> method does not modify the original array
// -> return if an element passes the condition
// -> does Not Modify Elements, filter only includes or excludes element

let numbers = [1,2,3,4,5,6,7,8,9,10,55,60,13,70];
let names = ["renil", "ram" , "rohit sharma", "rohan"];

// 1. Given an array of numbers, use the filter method to return a new array containing only even numbers.
let evenNumber = numbers.filter((e)=>{
    return e%2==0;
})
console.log((evenNumber));

// 2. Given an array of strings, use the filter method to return a new array containing only the strings that have more than 5 characters.
let newString = names.filter((e)=>{
    return e.length>5;
})
console.log(newString);

// 3. Given an array of numbers, use the filter method to return a new array containing only the numbers greater than 50.
let greaterNumber = numbers.filter((e)=>{
    return e>50;
})
console.log(greaterNumber);

// 4. Given an array of objects representing students with properties { name, marks }, use the filter method to return only the students who scored more than 75 marks.

let students = [
    {
        name: "renil",
        mark: 80,
    },
    {
        name: "rohit",
        mark: 85,
    },
    {
        name: "rohan",
        mark: 50,
    },
];
let topStudent = students.filter((e)=>{
    return e.mark > 75;
})
console.log(topStudent);

// 5. Given an array of words, use the filter method to return a new array containing only the words that start with the letter 'A'.

let words = ["Ayan", "ajay", "Renil", "rohit"]
let letterAWords = words.filter((e)=>{
    return e.charAt(0)==='A';
})
console.log(letterAWords);

// 6. Given an array of user objects { id, name, isActive }, use the filter method to return only the active users (isActive: true).

let user = [
    {
        id: 1,
        name: "renil",
        isActive: true,
    },
    {
        id: 2,
        name: "rohit",
        isActive: false,
    },
    {
        id:3,
        name: "ram",
        isActive: true,
    }
]
let activeUsers = user.filter((e)=>{
    return e.isActive === true
})
console.log(activeUsers);

// 7. Given an array of temperatures, use the filter method to return only the temperatures that are below freezing (0°C).

let temperatures = [30,35,40,45,10,-10,-20];
let freesingTemp = temperatures.filter((e)=>{
    return e<0;
})
console.log(freesingTemp);

// 8. Given an array of numbers, use the filter method to return only the prime numbers.

let primeNumber = numbers.filter((e)=>{
    let isPrime=true;
    for(let i=2; i<e ; i++){
        if(e%i==0){
            isPrime= false;
            break;
        }
    }
    return isPrime;
})
console.log(primeNumber);

// 9. Given an array of objects representing products { name, price, inStock }, use the filter method to return only the products that are in stock (inStock: true).

let products = [
    {
        name: "television",
        price: 35000,
        inStock: true,
    },
    {
        name: "refrigerator",
        price: 20000,
        inStock: false,
    },
    {
        name: "cycle",
        price: 8000,
        inStock: true,
    }
]
let inStockProduct = products.filter((e)=>{
    return e.inStock === true
});
console.log(inStockProduct);


// 10. Given an array of movie objects { title, rating }, use the filter method to return only the movies with a rating of 8 or higher.

let movie = [
    {
        title: "movie 1",
        rating: 10,
    },
    {
        title: "movie 2",
        rating: 7,
    },
    {
        title: "movie 3",
        rating: 9,
    },
]
let highRatingMovie = movie.filter((e)=>{
    return e.rating>=8;
})
console.log(highRatingMovie);
