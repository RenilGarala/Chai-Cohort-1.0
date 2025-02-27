// Polyfill functions for array methods
let arr = [13,1, 2, 5, 4,1, -3,5,-5,-1,2];

// ---------------------forEach()-------------------------
// -> no return, no change original array
// -> perform operation on each element
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        for(let i=0; i<this.length; i++){
            userFn(this[i],i);
        }
    }
}
arr.myForEach((e, index)=>{
    console.log(e*3,index);
})

// -----------------------map()----------------------------
// -> return elements
// -> perform operation on each element
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        let newMap= [];
        for(let i=0; i<this.length; i++){
            newMap[i]= userFn(this[i],i);
        }
        return newMap;
    }
}
let mapArray = arr.myMap((e,i)=>{
    return e*i;
})
console.log(mapArray);

// -----------------------filter()----------------------------
// -> return element if true
// -> filter element based on codition

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        let newFilter = [];
        for(let i=0; i<this.length;i++){
            if(userFn(this[i], i,this)){
                newFilter.push(this[i]);
            }
        }
        return newFilter
    }
}

let filterArray = arr.myFilter((e)=>{
    return e%2===0;
})
console.log(filterArray)

// -----------------------reduce()----------------------------
// -> return calculated result of array

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(userFn,value){
        let ans = value;
        for(let i=0; i<this.length; i++){
            ans = userFn(ans,this[i],i,this);
        }
        return ans;
    }
}

let reduceArray = arr.myReduce((temp, e)=>{
    return temp+e;
},0)
console.log(reduceArray);

// -----------------------find()----------------------------
// -> return the first element if satisfies a condition


if(!Array.prototype.myFind){
    Array.prototype.myFind = function(userFn){
        for(let i=0; i<this.length ; i++){
            if(userFn(this[i])){
                return this[i];
            }
        }
        return "element not exist"
    }
}
let findArray = arr.myFind((e)=>{
    return e<0;
})
console.log(findArray);

// -----------------------findIndex()----------------------------
// -> return the first element index if satisfies a condition

if(!Array.prototype.myFindIndex){
    Array.prototype.myFindIndex = function(userFn){
        for(let i=0; i<this.length ; i++){
            if(userFn(this[i])){
                return i;
            }
        }
        return "element not exist"
    }
}
let findAtArray = arr.myFindIndex((e)=>{
    return e<0;
})

console.log(findAtArray);

// -----------------------some()----------------------------
// return true if at least one element satisfies a condition.

if(!Array.prototype.mySome){
    Array.prototype.mySome = function(userFn){
        for(let i=0; i<this.length; i++){
            if(userFn(this[i]))
                return true;
        }
        return false;
    }
}

let someArray = arr.mySome((e)=>{
    return e>0;
})

console.log(someArray);

// -----------------------every()----------------------------
// return true if all element satisfies a condition.

if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(userFn){
        for(let i=0; i<this.length; i++){
            if(!userFn(this[i]))
                return false;
        }
        return true;
    }
}

let everyArray = arr.myEvery((e)=>{
    return e>0;
})

console.log(everyArray);

// -----------------------includes()----------------------------
// Checks if an element exists in an array.

if(!Array.prototype.myIncludes){
    Array.prototype.myIncludes = function(value, startindex){
        if(startindex===undefined){
            startindex=0;
        }
        for(let i=startindex; i<this.length; i++){
            if(this[i]===value){
                return true;
            }
        }
        return false;
    }
}

let includesArray = arr.myIncludes(5,3)

console.log(includesArray);

// -----------------------indexOf()----------------------------
// returns the index of the first occurrence of an element.

if(!Array.prototype.myIndexOf){
    Array.prototype.myIndexOf = function(value, startindex){
        if(startindex===undefined){
            startindex=0;
        }
        for(let i=startindex; i<this.length; i++){
            if(this[i]===value){
                return i;
            }
        }
        return "element not exist";
    }
}

let indexOfArray = arr.myIndexOf(5,2)

console.log(indexOfArray);

//-----------------------lastIndexOf()----------------------------
// return the last index of an occurrence of an element.

if(!Array.prototype.myLastIndexOf){
    Array.prototype.myLastIndexOf = function(value, startindex){
        if(startindex===undefined){
            startindex=0;
        }
        for(let i=this.length-1; i>=startindex; i--){
            if(this[i]==value){
                return i;
            }
        }
        return "element not exist";
    }
}

let lastIndexOfArray = arr.myLastIndexOf(-3,3)

console.log(lastIndexOfArray);