/**
 * Write your challenge solution here
 */

const redButton = document.getElementById("redButton");
redButton.addEventListener("click", function(){
    document.getElementById("mainHeading").style.color="#e74c3c";
});

const greenButton = document.getElementById("greenButton");
greenButton.addEventListener("click", function(){
    document.getElementById("mainHeading").style.color="#2ecc71";
})

const blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", function(){
    document.getElementById("mainHeading").style.color="#3498db";
})

const purpleButton = document.getElementById("purpleButton");
purpleButton.addEventListener("click", function(){
    document.getElementById("mainHeading").style.color="#9b59b6";
})

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click",function(){
    document.getElementById("mainHeading").style.color="black"
})