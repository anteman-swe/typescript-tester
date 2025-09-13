"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myHeadline = document.getElementById("headline"); // Väljer min rubrik, hade kunnat använda querySelector då det bara finns en "h1" men querySelector hittar bara den första förekomsten;
const button = document.getElementById("button"); // Väljer min knapp "button", hade kunnat använda querySelector då det bara finns en "button" men queryselector hittar bara den första förekomsten;
const hello = "Hello World!"; //  konstant för vad man ska säga utan klick eller efter var annat klick. 
const goodbye = "Goodbye World!"; // konstant för vad man säger efter klick.
const helloColor = "blue"; // Vilken färg på Hello
const goodbyeColor = "red"; // Vilken färg på Goodbye
const buttonTextHello = "Klicka mig!"; // Knapptext när "Hello World!" visas
const buttonTextGoodbye = "Klicka mig igen!"; // Kanpptext när "Goodbye World!" visas
if (myHeadline) {
    myHeadline.innerHTML = hello; // Sätt text första gången till min rubrik
}
if (button) {
    button.innerHTML = buttonTextHello; // Sätt text till knappen för första gången
    button.addEventListener("click", changePage); // Sätt en lyssnare som lyssnar efter musklick på knappen och då kör funktionen "changePage"
}
function changePage() {
    if (myHeadline && button) {
        if (myHeadline.innerHTML === hello) {
            myHeadline.style.color = goodbyeColor;
            myHeadline.innerHTML = goodbye;
            button.innerHTML = buttonTextGoodbye;
        }
        else {
            myHeadline.style.color = helloColor;
            myHeadline.innerHTML = hello;
            button.innerHTML = buttonTextHello;
        }
    }
}
//# sourceMappingURL=tscript.js.map