

// console.log(parseFloat(inputField.value));
// console.log(inputValue);


function triangleCalculator() {
    const triangleBase = inputFieldToValue("triangle-base");
    console.log(triangleBase);
    const triangleHight = inputFieldToValue("triangle-hight");
    console.log(triangleHight);
}

// const btnTriangle = document.getElementById('btn-triangle');
// console.log(btnTriangle);
// btnTriangle.addEventListener('click', console.log(triangleCalculator()));

function inputFieldToValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}

