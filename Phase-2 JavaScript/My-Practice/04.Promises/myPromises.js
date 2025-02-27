// --------------promise one -------------------

const promiseOne = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("-----------------Promise 1-----------------");
    console.log("Async task 1");
    res();
  }, 1000);
});
promiseOne.then(() => {
  console.log("I am then function");
});

// --------------promise second -------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("-----------------Promise 2-----------------");
    console.log("I am Promise 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("I am 2 Promise Then function");
});

// ------------------promise third-------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("-----------------Promise 3-----------------");
    console.log("Async task 3");
    resolve({ name: "renil", age: "10" });
  }, 1000);
}).then(function (data) {
  console.log(data);
});

//-------------------promise fourth ---------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("-----------------Promise 4-----------------");
    let error = true;
    if (!error) {
      console.log("I am 4 promise");
      resolve();
    } else {
      reject("Error: something wents wrong");
    }
  }, 2000);
})
  .then(() => {
    console.log("Pass value of a");
    let a = 200;
    return a;
  })
  .then((value) => {
    console.log(`Value of A =${value}`);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("All things are executed");
  });

//----------------promise 5-----------------

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "renil", age: "20" });
    } else {
      reject("Error: Something wants wrong");
    }
  }, 3000);
});

async function consumePromise() {
  try {
    const data = await promiseFive;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();
