const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = '30 nov 2023';

setInterval(countDown, 1000);

function countDown(){
    const dateStart = new Date(start);
    const now = Date.now();
    const interval = dateStart - now ;
    
    const dayStart = Math.floor( interval / (1000 * 60 * 60 * 24));
    const hourStart = Math.floor( interval % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minuteStart = Math.floor( interval % (1000 * 60 * 60) / (1000 * 60));
    const secondStart = Math.floor( interval % (1000 * 60) / (1000));

    day.innerText = dayStart + 'D';
    hour.innerText = hourStart + 'H';
    minute.innerText = minuteStart + 'M';
    second.innerText = secondStart + 'S';
}