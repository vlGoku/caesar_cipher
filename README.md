# Caesar Cipher

The Caesar Cipher is a substitution cipher that shifts letters in a message to make it unreadable if intercepted

function letter(letter, num) encrypts the letters from the word with the ASCII Table and checks if it is a capital Letter or a lowercase letter

```
function letter(letter, num)
```

function shiftChar(myArray, num) creates a new array where the shifted letters will be pushed

```
function shiftChar(myArray, num)
```

The Event Listener "task.addEventListener"click", function ()" listens to the "click" to do the actual work

```
task.addEventListener("click", function () {
  const num = parseInt(wert.value);
  const inp = text.value;
  myArray = inp.split("");
  shiftChar(myArray, num);
});
```

Lastly the button that resets the program, it restarts the website and clears the inputs

```
neu.addEventListener("click", () => {
  wert.value = "";
  text.value = "";
  location.reload();
});
```
