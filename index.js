let cursorText = document.getElementById("greet-text");

const nav = document.querySelector('.navigation').offsetHeight;
document.documentElement.style.setProperty('--scroll-pdn', nav + "px");

const theText = "Hellow World!";
initialText = "";

function createText(length){
    if(length >= theText.length ){
        return;
    }
    initialText = initialText + theText[length];
    cursorText.innerHTML = initialText;
    length++;
  
    setTimeout(() => createText(length),100);
}

createText(0);