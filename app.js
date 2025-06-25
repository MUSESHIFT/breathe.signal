
function playSound(chakra) {
  const audio = new Audio(`${chakra}.mp3`);
  audio.volume = 0.7;
  audio.play();
}

function applyTheme(chakra) {
  const colors = {
    root: '#ff1744',
    sacral: '#ff9100',
    solar: '#ffea00',
    heart: '#00e676',
    throat: '#00b0ff',
    third_eye: '#7e57c2',
    crown: '#d500f9'
  };

  const body = document.body;
  const color = colors[chakra] || '#ffffff';
  body.style.backgroundColor = '#000';
  body.style.color = color;
  document.querySelectorAll('.line').forEach(line => {
    line.style.color = color;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button[data-chakra]');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const chakra = this.getAttribute('data-chakra');
      playSound(chakra);
      applyTheme(chakra);
    });
  });
});
