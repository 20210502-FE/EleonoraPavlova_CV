const skills = document.getElementById("title");
let mark = Date.now();
let date = setInterval(function () {
    let timePassed = Date.now() - mark;

    if (timePassed >= 2000) {
        clearInterval(date);
        return;
    }


    pen(timePassed);

}, 20);


function pen(timePassed) {
    skills.style.transform = `translateX(${-200 - timePassed / -5}px)`;
}

const image = document.getElementById("icon");
let first = Date.now();
let day = setInterval(function () {
    let timePassed = Date.now() - first;

    if (timePassed >= 3000) {
        clearInterval(day);
        return;
    }


    line(timePassed);

}, 30);


function line(timePassed) {
    image.style.transform = `translateX(${800 - timePassed / 5}px)`;
}