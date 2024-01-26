function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener('click', () => {
  // document.body.style.backgroundColor = [getRandomHexColor()];
  let body = document.querySelector("body");
  body.style.backgroundColor = [getRandomHexColor()];
  let colorSpan = document.querySelector(".color");
  colorSpan.textContent = body.style.backgroundColor;
});




// styles
button.style.backgroundColor = 'rgba(78, 117, 255, 1)';
button.style.width = '148px';
button.style.height = '40px';
button.style.color = 'white';
button.style.borderRadius = '8px';
document.body.style.marginLeft = '650px';
document.body.style.marginRight = '650px';
// styles
