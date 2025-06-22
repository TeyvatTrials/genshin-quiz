const answer = "sucrose";

function checkGuess() {
  const userGuess = document.getElementById("guessInput").value.toLowerCase();
  const result = document.getElementById("result");

  if (userGuess === answer) {
    result.textContent = "✅ Correct! Well done, Alchemist!";
    result.style.color = "lightgreen";
  } else {
    result.textContent = "❌ Nope! Try again.";
    result.style.color = "red";
  }
}
