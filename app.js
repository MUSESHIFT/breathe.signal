function playSound(button) {
  const chakra = button.getAttribute('data-chakra');
  const audio = document.getElementById(chakra);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function applyTheme(chakra) {
  const colors = {
    root: '#ff1744',
    sacral: '#ff9100',
    solar: '#fff000',
    heart: '#32cd32',
    throat: '#4682b4',
    third_eye: '#8a2be2',
    crown: '#dda0dd'
  };

  const color = colors[chakra] || '#ffffff';
  document.body.style.backgroundColor = '#000';
  document.body.style.color = color;

  document.querySelectorAll('.line').forEach(line => {
    line.style.color = color;
  });

  document.querySelectorAll('.chakra-button').forEach(btn => {
    btn.style.borderColor = color;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.chakra-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const chakra = button.getAttribute('data-chakra');
      playSound(button);
      applyTheme(chakra);
    });
  });
});
