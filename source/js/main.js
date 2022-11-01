function interceptClickEvent(e) {
    let target = e.target;
    if (target && target.tagName === 'A') {
        let href = target.getAttribute('href');
        if (href.indexOf('/') === 0 && location.hash === '#dark') {
            e.preventDefault();
            location.assign(`${href}#dark`);
        }
    }
}
document.addEventListener('click', interceptClickEvent);
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
