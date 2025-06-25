
const chakraColors = {
  root: "#e53935",
  sacral: "#ff9800",
  solar: "#fdd835",
  heart: "#66bb6a",
  throat: "#42a5f5",
  third_eye: "#7e57c2",
  crown: "#ec407a"
};

const buttons = document.querySelectorAll(".chakra-button");
const body = document.body;

// Set initial chakra
let currentChakra = "solar";
applyChakra(currentChakra);

// Add listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const chakra = button.getAttribute("data-chakra");
    const sound = new Audio(`./sounds/${button.getAttribute("data-sound")}`);
    sound.play();
    applyChakra(chakra);
  });
});

function applyChakra(chakra) {
  const color = chakraColors[chakra];
  if (!color) return;

  body.style.setProperty("color", color);
  buttons.forEach(btn => {
    btn.style.color = color;
    btn.style.borderColor = color;
    btn.style.boxShadow = `0 0 10px ${color}80`;
  });
}
