const element = document.getElementById("fullname");
let start = Date.now();
let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
        clearInterval(timer);
        return;
    }


    draw(timePassed);

}, 20);


function draw(timePassed) {
    element.style.transform = `translateX(${400 - timePassed / 5}px)`;
}