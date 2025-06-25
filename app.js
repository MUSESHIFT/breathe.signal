function playSound(button) {
  const chakra = button.getAttribute('data-chakra');
  const audio = document.getElementById(chakra);
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 0.7; // optional: soften by default
    audio.play().catch(err => console.warn(`Sound playback failed for ${chakra}:`, err));
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

  // Update terminal text lines
  document.querySelectorAll('.line').forEach(line => {
    line.style.color = color;
  });

  // Update button borders and text color
  document.querySelectorAll('.chakra-button').forEach(btn => {
    btn.style.borderColor = color;
    btn.style.color = color;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.chakra-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const chakra = button.getAttribute('data-chakra');
      if (!chakra) return;
      playSound(button);
      applyTheme(chakra);
    });
  });
});
