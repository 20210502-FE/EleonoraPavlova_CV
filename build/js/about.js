const about = document.getElementById("summary");
let onset = Date.now();
let period = setInterval(function () {
    let timePassed = Date.now() - onset;

    if (timePassed >= 2000) {
        clearInterval(period);
        return;
    }


    pip(timePassed);

}, 20);


function pip(timePassed) {
    about.style.transform = `translateX(${-400 - timePassed / -5}px)`;
}
// плавные якоря
const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}