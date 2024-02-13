
function triangleCalculator() {
    const triangleBase = inputFieldToValue("triangle-base");
    const triangleHight = inputFieldToValue("triangle-hight");
    const area = 0.5 * triangleBase * triangleHight;
    areaPrint(area, 'triangle-area', 'Triangle');
}

function inputFieldToValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const inputNum = parseFloat(inputValue);
    return inputNum;
}

function areaPrint(area, id, shape) {
    const print = document.getElementById(id);
    print.innerText = area;
    const li = document.createElement('li');
    li.innerHTML = `<span>${shape}: ${area} cm<sup>2</sup></span><i class="item-x fa-solid fa-circle-xmark"></i>`;
    li.classList.add('flex', 'justify-between', 'items-center', 'border-b-2', 'py-2');
    const items = document.getElementById('area-calculation-list');
    items.appendChild(li);
    const clearAllItems = document.getElementById('clearAllItems');
    clearAllItems.style.display = 'block';
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
    const clearAllItems = document.getElementById('clearAllItems');
    clearAllItems.style.display = 'none';
};
