
function triangleCalculator() {
    const triangleBase = inputFieldToValue("triangle-base");
    const triangleHight = inputFieldToValue("triangle-hight");
    let area = 0.5 * triangleBase * triangleHight;
    areaPrint(area, 'triangle-area', 'Triangle');
}

function rectangleCalculator() {
    const rectangleW = inputFieldToValue("rectangle-w");
    const rectangleL = inputFieldToValue("rectangle-l");
    let area = rectangleW * rectangleL;
    areaPrint(area, 'rectangle-area', 'Rectangle');
}

function parallelogramCalculator() {
    const parallelogramB = inputFieldToValue("parallelogram-b");
    const parallelogramH = inputFieldToValue("parallelogram-h");
    let area = parallelogramB * parallelogramH;
    areaPrint(area, 'parallelogram-area', 'Parallelogram');
}

function rhombusCalculator() {
    const rhombusD1 = inputFieldToValue("rhombus-d1");
    const rhombusD2 = inputFieldToValue("rhombus-d2");
    let area = 0.5 * rhombusD1 * rhombusD2;
    areaPrint(area, 'rhombus-area', 'Rhombus');
}

function pentagonCalculator() {
    const pentagonP = inputFieldToValue("pentagon-p");
    const pentagonB = inputFieldToValue("pentagon-b");
    let area = 0.5 * pentagonP * pentagonB;
    areaPrint(area, 'pentagon-area', 'Pentagon');
}

function ellipseCalculator() {
    const ellipseA = inputFieldToValue("ellipse-a");
    const ellipseB = inputFieldToValue("ellipse-b");
    const pi = 3.141592653589793238462643383279502884197;
    let area = pi * ellipseA * ellipseB;
    areaPrint(area, 'ellipse-area', 'Ellipse');
}

// common for all card
function inputFieldToValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}

function areaPrint(area, id, shape) {
    const print = document.getElementById(id);
    area !== Math.floor(area) ? area = area.toFixed(2) : null;
    print.innerText = area;
    const li = document.createElement('li');
    li.innerHTML = `<span>${shape}: ${area} cm<sup>2</sup></span><span class="item-x">&#x2718;</span>`;
    li.classList.add('flex', 'justify-between', 'items-center', 'border-b-2', 'py-2');
    const items = document.getElementById('area-calculation-list');
    items.appendChild(li);
    document.getElementById('clearAllItems').classList.remove('hidden');
}

document.getElementById('area-calculation-list').addEventListener('click', function () {
    const items = document.getElementsByClassName('item-x');
    for (const item of items) {
        item.addEventListener('click', function (event) {
            event.target.parentNode.remove();
        })
    }
});

function clearAllItems() {
    const items = document.getElementById('area-calculation-list');
    items.innerText = "";
    document.getElementById('clearAllItems').classList.add('hidden');
};
