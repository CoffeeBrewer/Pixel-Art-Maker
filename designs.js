// Select color input
const colorPickerElem = document.getElementById('colorPicker');
let colorValue = colorPickerElem.value;
// Select size input
const heightInputElem = document.getElementById('inputHeight');
const widthInputElem = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
const tableElem = document.getElementById('pixelCanvas');

function colorCell(e) {
    const target = e.target;
    target.style.backgroundColor =  colorValue;
}
/**
 * Creates an N * M grid.
 * @param {number} N 
 * @param {number} M 
 */
function makeGrid(N,M) {
    tableElem.innerHTML = "";
    for (let n = 0; n < N; n++) {
        const tableRow = document.createElement('tr');
        for(let m = 0; m < M; m++) {
            const tableCell = document.createElement('td');
            tableCell.addEventListener('click', colorCell);
            tableRow.appendChild(tableCell);
        }
    tableElem.appendChild(tableRow);
    }
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const itemWidth = parseInt(widthInputElem.value);
    const itemHeight = parseInt(heightInputElem.value);
    makeGrid(itemHeight, itemWidth);
})

colorPickerElem.addEventListener('change', function() {
    colorValue = colorPickerElem.value;
})


