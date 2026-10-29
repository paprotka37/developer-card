const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const countButton = document.querySelector("#count-button");

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

let clickCount=0;
countButton.addEventListener("click", function() {
    clickCount++;
    countButton.textContent=clickCount;
});

