document.addEventListener("DOMContentLoaded", () => {
  const bootSequence = document.getElementById("boot-sequence");
  const mainInterface = document.getElementById("main-interface");
  const startButton = document.getElementById("start-button");
  const skipProtocolButton = document.getElementById("skip-protocol-button");

  startButton.addEventListener("click", () => {
    bootSequence.classList.add("hidden");
    mainInterface.classList.remove("hidden");
    transitionTo("intro_sequence");
  });

  skipProtocolButton.addEventListener("click", () => {
    transitionTo("init");
  });

  const screen = document.getElementById("screen");
  const controls = document.getElementById("controls");
  const statusText = document.getElementById("status-text");
  const userIdDisplay = document.getElementById("user-id-display");

  function transitionTo(state) {
    screen.textContent = ">> " + state + " protocol loading...";
    statusText.textContent = `state::${state}`;
  }
});
