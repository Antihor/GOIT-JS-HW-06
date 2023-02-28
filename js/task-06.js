const inputRef = document.querySelector('#validation-input');
//console.log(inputRef)
const inputLength = inputRef.dataset.length;
//console.log(inputLength)

inputRef.addEventListener('blur', onInputCheck);
    
function onInputCheck(ev) {
    if (Number(inputLength) === ev.currentTarget.value.length) {
          inputRef.classList.remove('invalid');
          return inputRef.classList.add('valid');
    } else {
          inputRef.classList.remove('valid');
          return inputRef.classList.add('invalid');
    }
}
