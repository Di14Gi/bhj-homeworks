const score = document.querySelector('#clicker__counter');
const button = document.querySelector('.clicker__cookie')
let count = 0;

button.addEventListener('mousedown', (e) => {
    button.style.width = "300px";
   
})

button.addEventListener('mouseup', (e) => {
    button.style.width = "200px";   
})

button.addEventListener('click', (e) => {
    count += 1;
    score.textContent = count;
})
