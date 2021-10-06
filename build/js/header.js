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


//плавное подгружение контента

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.1]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}
