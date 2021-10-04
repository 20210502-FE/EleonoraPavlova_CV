
//подгружение
const footer = document.getElementById('bottom');

const footerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
}
var footerCb = function () {
    let origin = Date.now();
    let half = setInterval(function () {
        let timePassed = Date.now() - origin;

        if (timePassed >= 2000) {
            clearInterval(half);
            return;
        }

        footer.style.transform = `translateX(${400 - timePassed / 5}px)`;
    }, 20);
};
var footerObserver = new IntersectionObserver(footerCb, footerOptions);

footerObserver.observe(footer)