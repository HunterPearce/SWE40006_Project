let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
