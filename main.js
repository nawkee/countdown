const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const newYear = new Date('1/1/2021');

setInterval(() => {
    const now = Date.now();
    const diff = Math.abs(now - newYear);
    days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);
