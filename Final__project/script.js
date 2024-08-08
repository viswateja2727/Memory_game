// List of emojis for the game
const emojis = ["😁", "😂", "🤣", "😄", "😅", "😆", "😉", "😊"];

// Game state variables
let gameBoard = [];
let flippedTiles = [];
let matchedPairs = 0;
let moves = 0;
let timer;
let seconds = 0;
let isGameActive = false;
let firstTile = null;
let secondTile = null;

// DOM elements
const gameBoardElement = document.getElementById("gameBoard");
const startButton = document.getElementById("startButton");
const timerElement = document.getElementById("timer");
const movesElement = document.getElementById("moves");
const winMessageElement = document.getElementById("winMessage");

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", () => {
    createGameBoard();
    startGame();
  });
  const stopButton = document.getElementById("stopButton");
  stopButton.addEventListener("click", () => {
     stopGame();
     createGameBoard();
    });
});

// Function to start the game

function startGame() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.classList.toggle("hidden");
    tile.addEventListener("click", (event) => {
      handleTileClick(event.target);
    });
  });

  // Reset game state
  flippedTiles = [];
  moves = 0;
  matchedPairs = 0;
  document.getElementById("moves").innerText = `Moves: ${moves}`;
  document.getElementById("timer").innerText = `Time: 0s`;
  // Shuffle emojis and create game board
  // Reset the timer
  timeElapsed = 0;
  document.getElementById("timer").innerText = `Time: ${timeElapsed}s`;

  // Clear any existing timer

  // Start the timer
  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById("timer").innerText = `Time: ${Math.floor(timeElapsed/60).toString().padStart(2, '0')} : ${(timeElapsed%60).toString().padStart(2, '0')}`;
    console.log(`Timer updated: ${Math.floor(timeElapsed/60)} : ${(timeElapsed%60)}`);
  }, 1000);
  //   if (timerInterval) {
  //     clearInterval(timerInterval);
  //   }
  // Enable tile clicking
  //   const tiles = document.querySelectorAll(".tile");
  //   tiles.forEach((tile) => {
  //     tile.classList.remove("hidden");
  //   });
}

// Function to stop the game
function stopGame() {
  // Stop timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = 0; // Reset the interval ID
  }
  flippedTiles = [];
  moves = 0;
  matchedPairs = 0;
  document.getElementById("moves").innerText = `Moves: ${moves}`;
  document.getElementById("timer").innerText = `Time: 00:00`;
  console.log("Game stopped");
  // Reset game board
  // Disable tile clicking
  // Reset game state variables
}

// Function to create and shuffle the game board
function createGameBoard() {
  // Create an array with pairs of emojis
  const emojis = ["😉", "😃", "😄", "😁", "😆", "😅", "😂", "🤣"];
  const pairs = [...emojis, ...emojis]; // Create pairs of emojis

  // Shuffle the array
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  const gameBoard = document.getElementById("gameBoard");
  if (!gameBoard) {
    console.error('No element with ID "gameBoard" found.');
    return;
  }
  gameBoard.innerHTML = ""; // Clear any existing tiles

  // Create tile elements and add them to the game board
  pairs.forEach((emoji, index) => {
    const tile = document.createElement("div"); // Create a new div element
    tile.classList.add("tile", "hidden");
    tile.dataset.emoji = emoji;
    tile.dataset.index = index;
    tile.innerHTML = `<span>${emoji}</span>`; // Initially hidden by CSS
    gameBoard.appendChild(tile);
  });
}

// Function to handle tile clicks
function handleTileClick(tile) {
  // if (!tile || tile.classList.contains('flipped') || secondTile) {
  //     return;
  // }

  tile.classList.toggle("flipped");
  moves++;
  document.getElementById("moves").innerText = `Moves: ${moves}`;
  if (!firstTile) {
    firstTile = tile;
  } else {
    secondTile = tile;
    console.log(firstTile.dataset.emoji === secondTile.dataset.emoji);
    // Check if the two flipped tiles match
    if (firstTile.dataset.emoji === secondTile.dataset.emoji) {
      // Keep them face up
      firstTile = null;
      secondTile = null;
      matchedPairs++;

      // Check for win condition
      if (matchedPairs === 8) {
        alert("You win!");
      }
    } else {
      // Flip them back after a short delay
      setTimeout(() => {
        firstTile.classList.toggle("flipped");
        secondTile.classList.toggle("flipped");
        firstTile = null;
        secondTile = null;
      }, 1000);
    }
  }
}

// Function to check for a match
function checkForMatch() {
  // If the two flipped tiles match
  //     Keep them face up
  //     Increment matchedPairs
  //     Check for win condition
  // Else
  //     Flip them back after a short delay
}

// Function to update the timer
function updateTimer() {
  // Increment seconds
  // Update timer display
}

// Function to check for win condition
function checkWinCondition() {
  // If all pairs are matched
  //     Stop the game
  //     Display win message with moves and time
}

// Function to play sound effect
function playSound(soundType) {
  // Play appropriate sound based on the action (tile flip, match, win)
}

// Initialize the game
createGameBoard();
