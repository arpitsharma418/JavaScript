// Rock, Paper, and Scissors game

let arr = ["Rock", "Paper", "Scissors"];

let user = arr[Number(prompt("Enter your number (0-2): "))];

let computer = arr[Math.floor(Math.random() * 3)];

let result;

if (user === computer) {
  result = "Match is tie";
} else if (
  (user === "Rock" && computer === "Scissors") ||
  (user === "Paper" && computer === "Rock") ||
  (user === "Scissors" && computer === "Paper")
) {
  result = "You won!";
} else {
  result = "Computer won!";
}

console.log(`${user} VS ${computer} : ${result}`);