var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");
var button2 = document.getElementById("copy")

console.log(css);
console.log(color1);

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(){
    body.style.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
    css.textContent = body.style.background + ";";
}

function copyClipboard(){
    var copyText = document.getElementById("gradient-color");
    copyText.select();
    document.execCommand('copy');
    navigator.clipboard.writeText(css.textContent);
    alert("Copied the text: " + css.textContent);
    console.log(css.textContent);
}


button2.addEventListener("click", copyClipboard);

button.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
