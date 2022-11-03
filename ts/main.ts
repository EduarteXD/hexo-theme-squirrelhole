let keyPressed = "None"

function interceptClickEvent(e: Event) {
  let target = e.target as HTMLElement;
  if (target && target.tagName === 'A') {
      let href = target.getAttribute('href') as String;
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

function logKeyPress(e: KeyboardEvent, type: "press" | "release") {
  if (type === "press") {
    keyPressed = e.key;
    if (keyPressed === "Control" || keyPressed === "Meta") {
      document.getElementsByTagName('body')[0].className = 'cmdMode';
    }
  } else {
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
  let toggler = document.getElementById('toggler') as HTMLElement;
  toggler.click();
  setTimeout(()=> {
      html.removeAttribute('style')
  }, 100);
} else {
  location.hash = "#light";
}
