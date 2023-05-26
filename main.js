const text = document.querySelector(".text");
const wert = document.querySelector(".wert");
const ausgabe = document.querySelector(".ausgabe");
const task = document.querySelector(".verschluesseln");
const neu = document.querySelector(".reset");

const num = parseInt(wert.value);
const inp = text.value;
myArray = inp.split("");

function letter(letter, num) {
  let ergebnis = letter.charCodeAt();
  ergebnis += num;
  ergebnis = String.fromCharCode(ergebnis);
  return ergebnis;
}
function shiftChar(myArray, num) {
  let shiftedLetters = [];
  for (let i = 0; i < myArray.length; i++) {
    shiftedLetters.push(letter(myArray[i], num));
  }
  let test = shiftedLetters.join("");
  ausgabe.textContent = test;
}
task.addEventListener("click", function () {
  console.log("geklickt");
  shiftChar(myArray, num);
});
neu.addEventListener("click", () => {
  wert.value = "";
  text.value = "";
  location.reload();
});

/* num % 26 === 0 ? (num = 26) : (num = num % 26);
 */
