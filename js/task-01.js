const catRef = document.querySelector('#categories');
console.log('Number of categories:', catRef.children.length);

/*const listRef = document.querySelectorAll('.item h2');
for (const cat of listRef) {
    console.log('Category: ', cat.textContent);
}

const itemRef = document.querySelectorAll('.item ul')
for (const num of itemRef) {
   console.log('Elements: ', num.children.length) 
}*/
const result = document.querySelectorAll('.item');

result.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
});

