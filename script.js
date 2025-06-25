// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.card');

// Asigna evento a cada botón
cards.forEach(card => {
  const button = card.querySelector('button');
  button.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});