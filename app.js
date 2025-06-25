document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll('.line');
  lines.forEach((el, i) => {
    el.style.animation = `typeIn 0.5s forwards ${i * 1}s`;
  });

  const whisper = document.getElementById('glitchWhisper');
  setTimeout(() => { whisper.play(); }, 2500);
});

function setChakraTheme(chakra) {
  const root = document.documentElement;
  const colors = {
    root: "#FF0055",       // Red
    sacral: "#FF9900",     // Orange
    solar: "#FFFF00",      // Yellow
    heart: "#00FF99",      // Green/Teal
    throat: "#00CCFF",     // Sky Blue
    thirdEye: "#AA00FF",   // Indigo
    crown: "#FF77FF"       // Violet
  };
  const selected = colors[chakra] || "#00ffcc";
  root.style.setProperty('--chakra-color', selected);
}
