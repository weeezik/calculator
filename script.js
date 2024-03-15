//add"click" event listeners for each button
//when 2 button is clicked, set num1 to 2
//when + button is clicked, set operator to "+"
//when 3 button is clicked, set num2 to 3
//when = button clicked, display console.log(operate(operator, num1, num2))
//when clear button clicked, remove any/all contents from display (might have to reset num1, operator, and num2 variables to null)

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.querySelector("#clear");
const operateButtons = document.querySelectorAll(".operate-button");
const equalsButton = document.querySelector("#equal");

let operator;
let num1;
let num2;

//use the forEach method to loop through each element and add an event listener
numberButtons.forEach(function (theNumbers) {
    theNumbers.addEventListener("click", function () {
        let returnValue = display.textContent;
        let displayValue = returnValue;
        let buttonValue = (event.target.textContent).toString();
        returnValue = displayValue += buttonValue;
        display.textContent = returnValue;
    })
});


//operator (content of button clicked) should be added to the display, similar to numberButtons function
operateButtons.forEach(function (theOperators) {
    theOperators.addEventListener("click", function () {
        let displayValue = display.textContent
        operator = event.target.textContent;
        display.textContent = displayValue.concat(operator);
        return operator
    })
});

clearButton.addEventListener("click", function () {
    display.textContent = " ";
});

const operate = function (operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "x":
            return num1 * num2;
            break;
        case "÷":
            return num1 / num2;
            break;
    }
}


equalsButton.addEventListener("click", function () {
    let resultDisplay = display.textContent;   
    const equationArray = resultDisplay.split(operator);
    let num1 = parseInt(equationArray[0]);
    let num2 = parseInt(equationArray[1]);
    display.textContent = Math.round(operate(operator, num1, num2)*100)/100;
})


console.log("Operate function check --- Should be 4: [" + operate("+", 2, 2) + "] ...Yup it's 4.")
// console.log("Via variable operation: " + operate(operator, num1, num2))
