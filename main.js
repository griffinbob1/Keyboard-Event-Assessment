allLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
const list = document.querySelector('ol');

function randomLetter() {
    var randomVar = Math.floor(Math.random() * allLetters.length);
    selectedLetter = allLetters[randomVar];
    console.log(selectedLetter);
}
randomLetter();
document.body.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (event.key == selectedLetter){
        const li = document.createElement('li');
        li.textContent = "SECRET KEY PRESSED: " + selectedLetter
        list.appendChild(li);
        randomLetter();
    }
  })