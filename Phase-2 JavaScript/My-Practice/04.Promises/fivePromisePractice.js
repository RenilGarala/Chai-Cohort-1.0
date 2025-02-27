// 1_Basic Promise Creation:
// Create a promise called checkEvenNumber that takes a number as an argument. If the number is even, resolve the promise with a message like "The number is even". If it’s odd, reject the promise with the message "The number is odd".

function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("The number is odd");
    }
  });
}

async function checkNumber() {
  try {
    const isNumber = await checkEvenNumber(9);
    console.log(isNumber);
  } catch (error) {
    console.log(error);
  }
}
checkNumber();

// 2_Chaining Promises:
// Write a function fetchUserData that returns a promise. Simulate an API call using setTimeout and resolve it with a user object like { id: 1, name: "Renil" }. Then chain a .then() to log the user's name and another .then() to log "User data fetched successfully".

function fetchUserData() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {
        reject("Error");
      } else {
        resolve({ id: 1, name: "Renil" });
      }
    }, 2000);
  })
    .then((data) => {
      console.log(data.name);
    })
    .then(() => {
      console.log("User data fetched successfully");
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      console.log("finally applyed");
    });
}

fetchUserData();

// 3_Handling Errors:
// Create a function getWeather that randomly either resolves with "Sunny day" or rejects with "Failed to fetch weather data". Use .then() and .catch() to handle both cases and log the result accordingly.

function getWeather() {
  new Promise((resolve, reject) => {
    const number = Math.random() < 0.5;
    console.log("------------------question 3 ------------------");
    if (number) {
      resolve("Sunny day");
    } else {
      reject("Failed to fetch weather data");
    }
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

getWeather();

// 4_Promise.all Example:
// Create three promises:
// ->fetchPosts: resolves in 2 seconds with an array of posts
// ->fetchComments: resolves in 1 second with an array of comments
// ->etchLikes: resolves in 3 seconds with a number of likes
// Use Promise.all() to wait for all of them and log the combined data when all are resolved.

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3", "post4", "post4"]);
      reject("Kuch to gad bad he fetchPosts me");
    }, 2000);
  });
}
function fetchComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["comment1", "comment2", "comment3", "comment4", "comment5"]);
      reject("kuch to gadbad he fetchComments me");
    }, 1000);
  });
}
function fetchLikes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([10, 33, 44, 65, 34]);
      reject("Kuch to gadbad he fetchLikes me");
    }, 3000);
  });
}

// Promise.all is javascript method, -> that takes an array of promises and -> waits for all of them to resolve.
//it maybe array of function, array of varibale name (in my case i write promise in function)
Promise.all([fetchPosts(), fetchComments(), fetchLikes()])
  .then(([posts, comments, likes]) => {
    const combinedData = { posts, comments, likes };
    console.log(combinedData);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });



//   5_Promise Chaining with Data Transformation:
// Write a function doubleNumber that returns a promise and doubles a given number after 1 second. Chain multiple .then() calls to double the number three times and log the final result. (e.g., 2 -> 4 -> 8 -> 16)

function doubleNumber(number){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(number*2);
            reject("Error: Something Wants wrong")
        },1000)
    })
    .then((value)=>{
        value = value*2;
        return value;
    })
    .then((value)=>{
        value = value*2;
        return value;
    })
    .then((value)=>{
        value = value*2;
        console.log(`total value is ${value}`);
    })
    .catch((error)=>{
        console.log(error);
    })
}
doubleNumber(1)