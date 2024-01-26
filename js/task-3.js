const inputString = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
function inputText(event) {
    const mainValue = inputString.value.trim();
    const secondValue = mainValue === '' ? "Anonymous" : mainValue;
    spanName.textContent = secondValue;
};

inputString.addEventListener("input", inputText);