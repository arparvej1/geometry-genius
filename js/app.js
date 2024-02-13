
function triangleCalculator() {
    const triangleBase = inputFieldToValue("triangle-base");
    const triangleHight = inputFieldToValue("triangle-hight");
    const area = 0.5 * triangleBase * triangleHight;
    areaPrint(area, 'triangle-area', 'Triangle'); // call print
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
    li.innerHTML = `<span>${shape}: ${area} cm<sup>2</sup></span><span class="item-x"> x </span>`;
    li.classList.add('flex');
    li.classList.add('justify-between');
    const items = document.getElementById('area-calculation-list');
    items.appendChild(li);
}

// remove list
// function removeItems() {
//     const itemsX = document.getElementsByClassName('item-x');
//     for (const item of itemsX) {
//         item.addEventListener('click', function (event) {
//             event.target.parentNode.remove();
//         })
//     }
// }

// document.getElementById('area-calculation-list').addEventListener('click', function () {
//     removeItems();
// });


document.getElementById('area-calculation-list').addEventListener('click', function () {
    const items = document.getElementsByClassName('item-x');
    for (const item of items) {
        item.addEventListener('click', function (event) {
            event.target.parentNode.remove();
        })
    }
});
