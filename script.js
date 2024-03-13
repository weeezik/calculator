//add"click" event listeners for each button
//when 2 button is clicked, set num1 to 2
//when + button is clicked, set operator to "+"
//when 3 button is clicked, set num2 to 3
//when = button clicked, display console.log(operate(operator, num1, num2))
//when clear button clicked, remove any/all contents from display (might have to reset num1, operator, and num2 variables to null)
const display = document.querySelector(".display");
let displayValue;
const two = document.querySelector("#two");



const numberButtons = document.querySelectorAll(".number-button");
console.log(numberButtons);
numberButtons.addEventListener("click", function (displayValue) {
    //if id of button clicked is 2, set display value to 2
    //switch statement

    displayValue = 2;
    display.textContent = displayValue;
});



//button-independent approach
//classbuttons.addEventListener (onclick) run function updateDisplay, 
//function updateDisplay {takes value of button and returns it to display}










//operate function
let operator = "-"
let num1 = 10
let num2 = 5
const operate = function (operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 + num2;
            break;
        case "/":
            return num1 / num2;
            break;
    }
}

console.log("Should be 4: [" + operate("+", 2, 2) + "] ...Yup it's 4.")
console.log("Via variable operation: " + operate(operator, num1, num2))
