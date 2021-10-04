

// подгружение при скролле
const educElement = document.getElementById('education');

const educationOptions = {
    root: null,
    threshold: 1.0
}
var educationCb = function (entries, observer) {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        if (timePassed >= 2000) {
            clearInterval(timer);
            return;
        }

        educElement.style.transform = `translateX(${-400 - timePassed / -5}px)`;
    }, 20);
};
var educationObserver = new IntersectionObserver(educationCb, educationOptions);

educationObserver.observe(educElement)



const icon = document.getElementById('symbol');
const iconOptions = {
    root: null,
    threshold: 1.0
}
var iconCb = function (entries, observer) {
    let tense = Date.now();
    let sand = setInterval(function () {
        let timePassed = Date.now() - tense;

        if (timePassed >= 2000) {
            clearInterval(sand);
            return;
        }

        icon.style.transform = `translateX(${400 - timePassed / 5}px)`;
    }, 20);
};
var iconObserver = new IntersectionObserver(iconCb, iconOptions);

iconObserver.observe(icon)