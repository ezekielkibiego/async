document.getElementById('demo').innerHTML = 'Hello Abu!';

function changeText() {
    const heading = document.getElementById('dom');
    heading.textContent = 'Learning Document Object Model';
}

function addItem() {
    const list = document.getElementById('myList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Button clicked!')
})

//Calculator

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        
        case '-':
            result = num1 - num2;
            break;
        
        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;

        default:
            result = 'Invalid Operator'
    }

    document.getElementById('result').textContent = `Result: ${result}`;

}




