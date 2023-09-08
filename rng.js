// let inputAmount = 0;

// Gets the value the user entered 
function getInputVal() {
    const inputAmount = document.querySelector('#input-amount').value;
    return inputAmount;
}

// Creates the html skeleton for the input fields
function generateForm() {
    const formDiv = document.createElement('div');
        formDiv.id = 'actual-rng';
        console.log(formDiv);
        document.querySelector('body').appendChild(formDiv);
    const form = document.createElement('form');
        form.id = 'rng-inputs';
        console.log(form);
        document.querySelector('#actual-rng').appendChild(form);
}

// Generates the button to later fetch the actual inputs and put them into an array
function generateFetchButton() {
    const fetchInputsButton = document.createElement('button');
    fetchInputsButton.id = 'fetch-inputs-button';
    fetchInputsButton.addEventListener('click', (event) => {
        event.preventDefault();
        doRandomStuff()})
    fetchInputsButton.textContent = 'Random!';
    document.querySelector('#rng-inputs').appendChild(fetchInputsButton);
}


// Generates the amount of text input fields the user specified
function generateInput() {
    const x = getInputVal();
    generateForm();
    for (y = 0; x > y; y++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'input-field';
        inputField.name = 'input[]';
        document.querySelector('#rng-inputs').appendChild(inputField);
    }
    generateFetchButton();
}


// Create an array from the values of the user inputs
function createArray() {
    const getInputs = document.getElementsByName('input[]');
    console.log(getInputs)
    const getInputsArray = (Array.from(getInputs))
    console.log(getInputsArray)
    const inputArray = []
    for (let i = 0; i < getInputsArray.length; i++) {
        inputArray.push(getInputsArray[i].value);
        console.log(inputArray);
    }
    return inputArray
}

// Creates div and paragraph for the result
function createResultDisplay() {
    const resultDiv = document.createElement('div');
        resultDiv.id = 'result-div'
        document.querySelector('#actual-rng').appendChild(resultDiv)
    const resultPara = document.createElement('p')
        resultPara.id = 'result-paragraph'
        document.querySelector('#result-div').appendChild(resultPara)
}

// Generate result from the user input array and add it to the DOM
function doRandomStuff() {
    createResultDisplay()
    const resultArray = createArray()
    const result = resultArray[Math.floor(Math.random() * resultArray.length)]
    document.querySelector('#result-paragraph').textContent = result + '!'
    console.log(result)
}

// Resets the entire form with every new amount of input fields specified by the user and then calls the actual function to generate the input fields
document.querySelector('#input-amount-button').addEventListener('click', (event) => {
    event.preventDefault();
    if (document.querySelector('#actual-rng')) {
        const removeDiv = document.querySelector('#actual-rng');
        removeDiv.remove();
    }
    generateInput();
    // console.log(inputAmount);
})

// Prevents page reload after button press and generates the random result.
// document.body.addEventListener('click', (event) => {
//     if (event.target.matches('#fetch-inputs-button')) {
//         event.preventDefault()

//     }
// })