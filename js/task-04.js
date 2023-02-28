const counter = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

incrBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});

/*
function incr() {
  counterValue += 1;
  count.textContent = counterValue;
}
function decr() {
  counterValue -= 1;
  count.textContent = counterValue;
}*/