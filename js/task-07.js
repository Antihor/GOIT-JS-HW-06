const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(ev) {
    let fontSize = ev.currentTarget.value;
    spanRef.style.fontSize = `${fontSize}px`;
}
/*
   fontSize = event.currentTarget.value;
    inputRef.style.fontSize = `${fontSize}px`;
*/