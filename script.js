var colors = []

var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var randomAnswer = pickedColor();
var rgbDisplay = document.getElementById("rgbDisplay");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");


// easy button removes selected class from other buttons plus sqares
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  difficultyChanged(3);
});

// medium button removes selected class from other buttons plus sqares
mediumBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  mediumBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  difficultyChanged(6);
});

// hard button removes selected class from other buttons plus sqares
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  mediumBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  difficultyChanged(9);
});


// resets colors
resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numberOfSquares);
  reset();
  // change square colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

})
rgbDisplay.textContent = randomAnswer;

for (var i = 0; i < squares.length; i++) {
  // adds initial colors
  squares[i].style.backgroundColor = colors[i];

  //click listeners to squares and compare to randomAnswer
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === randomAnswer) {
      messageCenter.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      gameTitle.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageCenter.textContent = "Try Again"
    }
  });
}

// won and change colors
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

//choose a random color picked to be answer
function pickedColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generates "num" random colors and adds numbers to an array
function generateRandomColors(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomPicker())
  }
  return arr;
}

// generates the array of random colors
function randomPicker() {
  // red 0 to 255
  randomRed = Math.floor(Math.random() * 256);
  // green 0 to 255
  randomGreen = Math.floor(Math.random() * 256);
  // blue 0 to 225
  randomBlue = Math.floor(Math.random() * 256);
  return "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}

// sets the number of squares chosen by difficulty selected and chooses x number of sqares
function difficultyChanged(difficulty) {
  numberOfSquares = difficulty
  colors = generateRandomColors(difficulty);
  reset();
  squareSetup();
}

// resets the platform for any changes that would effect the game
function reset() {
  randomAnswer = pickedColor();
  rgbDisplay.textContent = randomAnswer;
  messageCenter.textContent = "";
  gameTitle.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors?"
}

// setup sqares for change in difficulty or squares present
function squareSetup() {
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block"
    } else {
      squares[i].style.display = "none"
    }
  }
}