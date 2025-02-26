/**
 * Write your challenge solution here
 */

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", function(){
    document.getElementById("nameDisplay").innerText = nameInput.value;
})

const jobInput = document.getElementById("jobInput");
jobInput.addEventListener("input", function(){
    document.getElementById("jobDisplay").innerText = jobInput.value;
})

const ageInput = document.getElementById("ageInput");
ageInput.addEventListener("input", function(){
    document.getElementById("ageDisplay").innerText = ageInput.value;
})

const bioInput = document.getElementById("bioInput");
bioInput.addEventListener("input", function(){
    document.getElementById("bioDisplay").innerText = bioInput.value;
})