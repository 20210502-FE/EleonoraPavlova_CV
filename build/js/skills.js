const skills = document.getElementById("title");
let mark = Date.now();
let date = setInterval(function () {
    let timePassed = Date.now() - mark;

    if (timePassed >= 3000) {
        clearInterval(date);
        return;
    }


    pencil(timePassed);

}, 20);


function pencil(timePassed) {
    skills.style.transform = `translateX(${550 - timePassed / 5}px)`;
}

const image = document.getElementById("icon");
let first = Date.now();
let day = setInterval(function () {
    let timePassed = Date.now() - first;

    if (timePassed >= 3000) {
        clearInterval(day);
        return;
    }


    pen(timePassed);

}, 20);


function pen(timePassed) {
    image.style.transform = `translateX(${550 - timePassed / 5}px)`;
}