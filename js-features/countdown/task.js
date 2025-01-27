let time = document.querySelector('#timer');
let currentTime = 30;

const timer = setInterval(() => {
    time.textContent = currentTime;
    if (currentTime <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(currentTime)
    } else {
        currentTime--;
    }
}, 1000);