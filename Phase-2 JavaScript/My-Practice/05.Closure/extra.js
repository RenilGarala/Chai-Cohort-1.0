function getName(){
    let count = 10;

    return function(){
        count++;
        console.log(count);
    }
}
const temp = getName();
temp();
temp();
temp();
temp();
temp();