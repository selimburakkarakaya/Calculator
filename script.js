let equal_pressed = 0;

// refer all buttons excluding AC and C
let button_input = document.querySelectorAll(".numbers");

// refer input, equal, clearAll and eraseSingle
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clearAll = document.getElementById("clearAll");
let eraseSingle = document.getElementById("eraseSingle");

window.onload = () => {
    input.value = "";
}

// access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        // display value of each button
        input.value += button_class.value;
    });
});

// slow the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        // evaluate user's input
        let solution = eval(inp_val);
        // true for natural numbers, false for decimal
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        // if user has entred invalid input
        alert("Invalid Input");
    }
});

// clear whole input
clearAll.addEventListener("click", () => {
    input.value = "";
});

// erase single digit
eraseSingle.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});