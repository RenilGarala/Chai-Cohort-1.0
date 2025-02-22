/**
 * Write your challenge solution here
 */
const toggleButton = document.getElementById("toggleButton");
let isOff = true;
toggleButton.addEventListener("click",function(){
    if(isOff){
        document.getElementById("bulb").style.backgroundColor = "#f1c40f"
        document.getElementById("bulb").style.boxShadow = "0px 0px 20px #f1c40f"
        document.getElementById("toggleButton").innerText = "Turn Off"
        document.getElementById("status").innerText = "Status: On"
        isOff = false;
    }else{
        document.getElementById("bulb").style.backgroundColor = "#95a5a6"
        document.getElementById("bulb").style.boxShadow = "none"
        document.getElementById("toggleButton").innerText = "Turn On"
        document.getElementById("status").innerText = "Status: Off"
        isOff = true;
    }
})