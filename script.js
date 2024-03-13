//add"click" event listeners for each button
//when 2 button is clicked, set num1 to 2
//when + button is clicked, set operator to "+"
//when 3 button is clicked, set num2 to 3
//when = button clicked, display console.log(operate(operator, num1, num2))
//when clear button clicked, remove any/all contents from display (might have to reset num1, operator, and num2 variables to null)


// const two = document.querySelector("#two");

const display = document.querySelector(".display");



const numberButtons = document.querySelectorAll(".number-button");
console.log(numberButtons);
// let displayValue;

//this function will run anytime a number button is clicked
// function updateDisplay () {
//     console.log(event.type)
// };

//use the forEach method to loop through each element and add an event listner to it
//within this event listner is the udpateDisplay function which within is a switch function updating the displayValue based on the event.target

numberButtons.forEach(function(button) {
    button.addEventListener("click", function(displayValue) {
        // switch(event.target)
        displayValue = console.log(event.target)
        display.textContent = displayValue;
    })
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
