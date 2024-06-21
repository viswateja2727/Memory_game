const display=document.getElementById("display");
function appendToDisplay(input) {
    display.value+=input;
}
function clearDisplay() {
    display.value="";
}
function clearLastCharacter() {
    display.value=Math.floor(display.value/10);
}
function calculate() {
    try {
        display.value=eval(display.value);
    }
    catch(error) {
        display.value="Error";
    }
}