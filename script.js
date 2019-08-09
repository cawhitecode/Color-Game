var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 50)",
  "rgb(5, 225, 0)",
  "rgb(5, 0, 225)",
  "rgb(255, 0, 120)",
  "rgb(150, 120, 0)"
]

var squares = document.querySelectorAll(".square");
var randomColor = colors[2];
var rgbDisplay = document.getElementById("rgbDisplay");

rgbDisplay.textContent = randomColor;



for (var i = 0; i < squares.length; i++) {
  // adds initial colors
  squares[i].style.backgroundColor = colors[i];

  //click listeners to squares and compare to randomColor
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === randomColor) {
      messageCenter.textContent = "Correct";
      changeColors(clickedColor);

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