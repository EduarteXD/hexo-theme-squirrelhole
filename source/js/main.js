let keyPressed = "None";
function interceptClickEvent(e) {
    let target = e.target;
    if (target && target.tagName === 'A') {
        let href = target.getAttribute('href');
        if (href.indexOf('/') === 0 && location.hash === '#dark') {
            e.preventDefault();
            location.assign(`${href}#dark`);
        }
    }
    if (target && target.className === 'link' &&
        (keyPressed === "Control" || keyPressed === "Meta")) {
        let href = target.innerText.split(" ")[0];
        open(href);
    }
}
function logKeyPress(e, type) {
    if (type === "press") {
        keyPressed = e.key;
        if (keyPressed === "Control" || keyPressed === "Meta") {
            document.getElementsByTagName('body')[0].className = 'cmdMode';
        }
    }
    else {
        keyPressed = "None";
        document.getElementsByTagName('body')[0].removeAttribute('class');
    }
}
document.addEventListener('click', interceptClickEvent);
document.addEventListener('keydown', (e) => logKeyPress(e, "press"));
document.addEventListener('keyup', (e) => logKeyPress(e, "release"));
if (location.hash === '#dark') {
    let html = document.getElementsByTagName('html')[0];
    html.setAttribute('style', 'transition: none');
    let toggler = document.getElementById('toggler');
    toggler.click();
    setTimeout(() => {
        html.removeAttribute('style');
    }, 100);
}
else {
    location.hash = "#light";
}
