const btnSubmit = document.getElementById("submit");
const textInput = document.getElementById("text");
const gameList = ["rock", "paper", "scissors"];

btnSubmit.addEventListener("click", function () {
  console.log("Button-Clicked");
  const randomGen = Math.floor(Math.random() * gameList.length);
  const randomItem = gameList[randomGen];
  const input = textInput.value.toLowerCase();

  if (input === randomItem) {
    alert("Draw!");
  } else if (
    (input === "rock" && randomItem === "scissor") ||
    (input === "scissor" && randomItem === "paper") ||
    (input === "paper" && randomItem === "rock")
  ) {
    alert("YOU WON");
  } else {
    alert("YOU LOSE");
  }
});
