let jigglerInterval;

function startJiggler() {
  if (jigglerInterval) {
    clearInterval(jigglerInterval);
  }
  jigglerInterval = setInterval(jiggleMouse, 3000);
}

function jiggleMouse() {
  const event = new MouseEvent("mousemove", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: Math.random() * window.innerWidth,
    clientY: Math.random() * window.innerHeight,
  });
  document.dispatchEvent(event);
}
