let display = document.getElementById('display');

function appendSymbol(symbol) {
    display.innerHTML += symbol;
}

function clearDisplay() {
    display.innerHTML = '';
}

function deleteLast() {
    display.innerHTML = display.innerHTML.slice(0, -1);
}

function formatResult(result) {
    if (Number.isInteger(result)) {
        return result.toFixed(1);
    }
    return result;
}

function calculateSquareRoot() {
    try {
        display.innerHTML = Math.sqrt(eval(display.innerHTML));
    } catch {
        display.innerHTML = 'Error';
    }
}

function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (e) {
        display.innerHTML = 'Error';
    }
}

function updateDisplay() {
    document.getElementById('history').innerText = history;
    document.getElementById('result').innerText = currentInput;
}
