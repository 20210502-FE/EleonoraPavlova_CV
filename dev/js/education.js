
const education = document.getElementById("education");
let gooff = Date.now();
let when = setInterval(function () {
    let timePassed = Date.now() - gooff;

    if (timePassed >= 3000) {
        clearInterval(when);
        return;
    }


    pencil(timePassed);

}, 30);


function pencil(timePassed) {
    education.style.transform = `translateX(${-600 - timePassed / -5}px)`;
}

const icon = document.getElementById("symbol");
let tense = Date.now();
let sand = setInterval(function () {
    let timePassed = Date.now() - tense;

    if (timePassed >= 3000) {
        clearInterval(sand);
        return;
    }


    port(timePassed);

}, 30);


function port(timePassed) {
    icon.style.transform = `translateX(${600 - timePassed / 5}px)`;
}