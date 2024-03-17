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
const decimalButton = document.querySelector("#decimalpoint");

//AUDIO
const mainHit = new Audio();
mainHit.src = "./audio/maintypehit.wav";
const clearHit = new Audio();
clearHit.src = "./audio/cleartypehit.wav";
const equalHit = new Audio();
equalHit.src = "./audio/equaltypehit.wav";

//operate function variables
let operator;
let num1;
let num2;
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

numberButtons.forEach(function (theNumbers) {
    theNumbers.addEventListener("click", function () {
        mainHit.play();
        let returnValue = display.textContent;
        let displayValue = returnValue;
        let buttonValue = (event.target.textContent).toString();
        returnValue = displayValue += buttonValue;
        display.textContent = returnValue;
        // return returnValue;
    })
});

clearButton.addEventListener("click", function () {
    clearHit.play();
    operator = ""
    num1 = ""
    num2 = ""
    display.textContent = "";
    displayValue = "";
});
equalsButton.addEventListener("click", function () {
    equalHit.play();
    let resultDisplay = display.textContent;
    const equationArray = resultDisplay.split(operator);
    console.table(equationArray)
    console.log(operator)
    let num1 = parseInt(equationArray[0].split(operator));
    let num2 = parseInt(equationArray[1]);
    display.textContent = Math.round(operate(operator, num1, num2) * 100) / 100;
})   
    
//add decimal point to display
//disable decimal point if a decimal point 
//is already in the number in display (i.e., an operator resets decimal count)
decimalButton.addEventListener("click", function() {
    mainHit.play();
    let displayValue = display.textContent;
    let decimal = event.target.textContent;
    display.textContent = displayValue.concat(decimal);
})
//keyboard support 
//(event listener's match with their original input, numberkeyboard similar code to numberbutton event listener)

operateButtons.forEach(function (theOperators) {
    theOperators.addEventListener("click", function () {
        mainHit.play();
        let displayValue = display.textContent
        // let operatorClicked = event.target.textContent
        let plusSign = /\+/
        let minusSign = /\-/
        let multSign = /\x/
        let divSign = /\÷/ 

        //If operator is in display already, calculate that equation then concat 
        //that result to the operator pressed (second-time pressed operator).
        if (plusSign.test(displayValue) === true || minusSign.test(displayValue) === true || 
            multSign.test(displayValue) === true || divSign.test(displayValue) === true) {
            let prevOperator = operator
            operator = event.target.textContent;
            display.textContent = displayValue.concat(operator);
            //output of equation
            const equationArray = displayValue.split(prevOperator);
            console.table(equationArray)
            let num1 = parseInt(equationArray[0]);
            let num2 = parseInt(equationArray[1]);
            display.textContent = Math.round(operate(prevOperator, num1, num2) * 100) / 100;
            displayValue = display.textContent
            display.textContent = displayValue.concat(operator)

        } else {
            //First operator press code here
            operator = event.target.textContent;
            display.textContent = displayValue.concat(operator);
            return operator
        }
    })
});