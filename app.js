
document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal");
  const lines = [
    "> init.breathe.signal :: active",
    "> cortex.seed__loaded",
    "> daemon.logic__init = trust.delay >> truth.buffer",
    "> phantasmic.palace.mirror() synced",
    "> “momentum = exit velocity” [museshift field manual p.26]",
    "> OS signature: xenocore__c000"
  ];
  let delay = 0;
  lines.forEach((text, i) => {
    const div = document.createElement("div");
    div.className = "line";
    div.textContent = text;
    div.style.opacity = 0;
    setTimeout(() => {
      div.style.opacity = 1;
      terminal.appendChild(div);
    }, i * 1000);
  });

  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const chakra = btn.getAttribute("data-chakra");
      document.body.className = `chakra-${chakra}`;
      document.body.setAttribute("data-chakra", chakra);
      const sound = document.getElementById("chakra-sound");
      sound.src = `sounds/${chakra}.mp3`;
      sound.play();
    });
  });
});
