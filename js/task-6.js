function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const divBox = document.querySelector('#boxes');

function createBoxes(amount) {
divBox.innerHTML = '';
let size = 30;
for (let i = 0; i < amount; i++) {
const box = document.createElement("div");
box.style.width = `${size}px`;
box.style.height = `${size}px`;
box.style.backgroundColor = [getRandomHexColor()];
divBox.append(box);
size += 10;
    
  }
}

function destroyBoxes() {
  divBox.innerHTML = '';
}

createButton.addEventListener("click", function () {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", function () {
  destroyBoxes();
});
