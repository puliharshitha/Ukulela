// If you want to add click functionality or further interactivity, you can use this.
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
    this.querySelector('.card-inner').classList.toggle('flipped');
  });
});
document.body.addEventListener('click', () => {
  if (bgMusic.paused) bgMusic.play();
}, { once: true });
