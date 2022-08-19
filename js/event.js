function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
const makeYellowButton = document.getElementById("make-yellow");
makeYellowButton.onclick = function makeYellow() {
  document.body.style.backgroundColor = "Yellow";
};
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
// importent we will use this
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
