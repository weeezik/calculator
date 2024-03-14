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



//use the forEach method to loop through each element and add an event listener

numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let returnValue = display.textContent;
        let displayValue = returnValue;
        let buttonValue = (event.target.textContent).toString();
        returnValue = displayValue += buttonValue;
        display.textContent = returnValue;
    })
});

clearButton.addEventListener("click", function () {
    display.textContent = " ";
});

//operate function
//hypothetical values
// let operator = "-"
// let num1 = 10
// let num2 = 5
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

console.log("Operate function check --- Should be 4: [" + operate("+", 2, 2) + "] ...Yup it's 4.")
// console.log("Via variable operation: " + operate(operator, num1, num2))

operateButtons.forEach(function (theOperators) {
    theOperators.addEventListener("click", function () {
        let num1 = display.textContent;
        switch (event.target.textContent) {
            case "+":
                operator = "+";
            case "-":
                operator = "-";
            case "x":
                operator = "*";
            case "÷":
                operator = "/"
        }
        let firstStep = [num1, operator];
        console.log(firstStep)
        return firstStep;
    })
});

//only after operator is selected: when a number button is pressed the 
//display is cleared and new num2 can be entered

//when equals button is pressed, num2=display.textContent 
//and then run the operate function

//equal button logic in WHITE NOTEBOOK
//update display.textContent to 
// display.textContent = operate(operator, num1, num2);
