const text = document.querySelector(".text");
const wert = document.querySelector(".wert");

const num = parseInt(wert.value);
const input = text.value;
myArray = input.split("");

function letter(letter, num) {
  let ergebnis = letter.charCodeAt();
  ergebnis += num;
  ergebnis = String.fromCharCode(ergebnis);
  console.log(ergebnis);
}
function shiftChar(myArray, num) {
  for (let i = 0; i < myArray.length; i++) {
    letter(myArray[i], num);
  }
}
