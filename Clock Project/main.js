const time = document.querySelector('#time');
const date = document.querySelector('#date');


setInterval(today, 1000);


function today() {
    let today = new Date();

    const MonthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const DayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let currentTime = `${today.getHours() < 10 ? '0' + today.getHours():today.getHours()}:
    ${today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()}:
    ${today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()}`;

    let currentDate = `${DayNames[today.getDay()]} , ${today.getDate()} ${MonthsNames[today.getMonth()]} ${today.getFullYear()}`;

    time.innerHTML = currentTime;
    date.innerHTML = currentDate;
}

