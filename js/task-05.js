const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
//console.log(spanRef)
// console.log(ev.currentTarget.value)
 
 //  inputRef !== '' ? spanRef.textContent = 'Anonymous' :
 //   spanRef.textContent = ev.currentTarget.value;
       
    event.currentTarget.value !== '' ?
        spanRef.textContent = event.currentTarget.value :
        spanRef.textContent = 'Anonymous'
});
