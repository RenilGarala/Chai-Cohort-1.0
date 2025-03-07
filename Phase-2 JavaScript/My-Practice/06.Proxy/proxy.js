//1. Create a proxy for an object user with properties name and age. Use the proxy to log a message every time a property is accessed.

const obj = {
  name: "renil",
  age: 12,
  marks: [1, 2, 3, 4],
};
const objProxy = new Proxy(obj, {
  get(target, property) {
    return target[property];
  },
});
console.log(objProxy.marks);

//2. Create a proxy for an object student with a property grade. Ensure that only numbers between 0 and 100 can be assigned to grade, otherwise throw an error.

const student = {
  grade: 0,
};

const studentProxy = new Proxy(student, {
  set(target, prop, value) {
    if (typeof value !== "number" || value < 0 || value > 100) {
      console.log("dcbsjh j");
      throw new Error("Grade must be a number between 0 and 100");
    }
    target[prop] = value;
    return true;
  },
});

try {
  studentProxy.grade = 40;
  console.log(studentProxy.grade);
} catch (error) {
  console.log(error.message);
}

//Create a proxy for an object settings. When trying to access a property that doesn’t exist, return a default message like "Property not found".

const settings = {
    theme: 'dark',
    language: 'en',
    notifications: true
}

const settingsProxy = new Proxy(settings, {
    get(target, property){
        if(!(property in target)){
            throw new Error("Property does not exist");
        }
        return target[property];
    }
})
try {
    console.log(settingsProxy.theme);
    console.log(settingsProxy.theme1);
} catch (error) {
    console.log(error.message);   
}

//Create a proxy for an object config where none of the properties can be modified. Any attempt to change a property should log a warning message.

const config = {
    appName: 'kajukatli',
    version: '1.0.0',
    proccessor: 'sasta vala'
}

const configProxy = new Proxy(config, {
    set(target, property, value) {
        console.warn(`Warning: Cannot modify the property "${property}"`);
        return true; // Still return true to avoid runtime errors
    }
})
console.log(configProxy.appName); // Output: MyApp
configProxy.appName = 'NewApp'; 
console.log(configProxy.appName);


//Create an object calculator with methods add(a, b) and multiply(a, b). Use a proxy to log the method name and arguments every time one of these methods is called.

const calculator = {
    add: function(a,b){
        return a+b;
    },
    multiply: function(a,b){
        return a*b;
    },
}

const calculatorProxy = new Proxy(calculator, {
    get(target, property){
        const origMethod = target[property];
        console.log(origMethod);
        return function(...arg){
            console.log(`Method Name is ${property}`);
            console.log(`Arguments ${arg.join(', ')}`);
            return origMethod.apply(target,arg);
        }
    }
})
console.log(calculatorProxy.add(10,2));
