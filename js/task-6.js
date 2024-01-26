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


// styles
createButton.style.backgroundColor = 'rgba(78, 117, 255, 1)';
createButton.style.width = '120px';
createButton.style.height = '40px';
createButton.style.borderRadius = '8px';
createButton.style.color = 'white';
destroyButton.style.width = '120px';
destroyButton.style.height = '40px';
destroyButton.style.backgroundColor = 'rgba(255, 78, 78, 1)';
destroyButton.style.borderRadius = '8px';
input.style.width = '150px';
input.style.height = '40px';
input.style.borderRadius = '8px';
mainDiv.style.backgroundColor = 'rgba(246, 246, 254, 1)';
mainDiv.style.width = '486px';
mainDiv.style.height = '104px';
mainDiv.style.display = 'flex';
mainDiv.style.alignItems = 'center';
mainDiv.style.gap = '10px';
mainDiv.style.padding = '32px 40px';
divBox.style.display = 'flex';
divBox.style.gap = '10px';
divBox.style.backgroundColor = 'rgba(246, 246, 254, 1)';
divBox.style.height = '104px';
divBox.style.marginTop = '16px';
// styles