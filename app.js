document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll('.line');
  lines.forEach((el, i) => {
    el.style.animation = `typeIn 0.5s forwards ${i * 1}s`;
  });

  const whisper = document.getElementById('glitchWhisper');
  setTimeout(() => { whisper.play(); }, 2500);

  const clickSound = document.getElementById("clickSound");
  const hoverSound = document.getElementById("hoverSound");
  const secretSound = document.getElementById("secretSound");

  document.querySelectorAll(".chakra-button").forEach(btn => {
    btn.addEventListener("click", () => clickSound.play());
    btn.addEventListener("mouseover", () => hoverSound.play());
  });

  document.querySelectorAll(".line").forEach(line => {
    if (line.textContent.includes("[HIDDEN]")) {
      line.addEventListener("click", () => secretSound.play());
    }
  });
});

function setChakraTheme(chakra) {
  const root = document.documentElement;
  const colors = {
    throat: "#5ee0ff"
  };
  const selected = colors[chakra] || "#00ffcc";
  root.style.setProperty('--chakra-color', selected);
}
