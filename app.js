
document.querySelectorAll('.chakra-button').forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${soundFile}`);
    audio.volume = 0.6;
    audio.play();
  });
});
