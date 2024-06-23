function startJiggler() {
  let currentPosition = { x: 0, y: 0 };
  let direction = 1; // 1: right, 2: down, 3: left, 4: up
  let moveInterval = null;

  // Function to update the position of the simulated cursor
  function updateCursorPosition(x, y) {
    currentPosition.x = x;
    currentPosition.y = y;
    console.log(`Moving simulated cursor to (${x}, ${y})`);
    const simulatedCursor = document.getElementById("simulatedCursor");
    simulatedCursor.style.left = x + "px";
    simulatedCursor.style.top = y + "px";
  }

  // Function to move in a square pattern
  function moveInSquare() {
    switch (direction) {
      case 1: // Move right
        updateCursorPosition(currentPosition.x + 50, currentPosition.y);
        break;
      case 2: // Move down
        updateCursorPosition(currentPosition.x, currentPosition.y + 50);
        break;
      case 3: // Move left
        updateCursorPosition(currentPosition.x - 50, currentPosition.y);
        break;
      case 4: // Move up
        updateCursorPosition(currentPosition.x, currentPosition.y - 50);
        break;
    }

    // Change direction after reaching the end of the square
    if (currentPosition.x >= 200 && direction === 1) {
      direction = 2;
    } else if (currentPosition.y >= 200 && direction === 2) {
      direction = 3;
    } else if (currentPosition.x <= 0 && direction === 3) {
      direction = 4;
    } else if (currentPosition.y <= 0 && direction === 4) {
      direction = 1;
    }
  }

  // Start moving in a square pattern
  moveInterval = setInterval(moveInSquare, 60000); // Move every 60 seconds (60000 milliseconds)

  // Example to stop the jiggler manually (you can implement a better way based on your needs)
  document.addEventListener("mousemove", () => {
    clearInterval(moveInterval);
    console.log("Jiggler stopped.");
  });

  // In a real scenario, you might want to implement a more sophisticated way to pause or stop the jiggler based on user interaction.
}
