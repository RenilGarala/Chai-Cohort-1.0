const createButton = document.getElementById("create-color");
const setColorClosure = setColor();
createButton.addEventListener("click", function () {
    const colorValue = document.getElementById("color-hash");
    if(colorValue.value.length != 6){
        alert("please enter valid color hash in valid 6 digit");
    }
    else{
        setColorClosure(colorValue.value);
        colorValue.value = "";
    }
});

function setColor() {
  return function (colorValue) {
    const colorButton = document.createElement("button");
    const buttonContainer = document.getElementById("button-container");
    colorButton.innerText = colorValue;
    buttonContainer.appendChild(colorButton);
    colorButton.addEventListener("click",function(){
        document.body.style.backgroundColor = `#${colorValue}`;
        console.log(colorValue);
    })
    colorButton.style.backgroundColor = `#${colorValue}`;
    // colorButton.onclick = function() {
      
    // };
    console.log(colorButton);
  };
}
