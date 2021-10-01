const footer = document.getElementById("bottom");
let origin = Date.now();
let half = setInterval(function () {
    let timePassed = Date.now() - origin;

    if (timePassed >= 2000) {
        clearInterval(half);
        return;
    }


    float(timePassed);

}, 20);


function float(timePassed) {
    footer.style.transform = `translateX(${-400 - timePassed / -5}px)`;
}