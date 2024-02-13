const areaCalculation = document.getElementById('area-calculation');

areaCalculation.innerText = "hello";

function triangleCalculator() {
    const triangleBase = inputFieldToValue("triangle-base");
    console.log(triangleBase);
    const triangleHight = inputFieldToValue("triangle-hight");
    console.log(triangleHight);
    const area = 0.5* triangleBase * triangleHight;
    console.log(area);
    areaPrint(area, 'triangle-area');
    // const print = document.getElementById('triangle-area');
    // print.innerText = area;
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

function areaPrint(area, id){
    const print = document.getElementById(id);
    print.innerText = area;
}