const buttRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

//console.dir(spanRef)

buttRef.addEventListener("click", onButtClick);

function onButtClick() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  //spanRef.textContent = document.body.backgroundColor;
  spanRef.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
