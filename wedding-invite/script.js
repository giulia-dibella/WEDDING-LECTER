const seal = document.getElementById('seal');
const envelopeContainer = document.getElementById('envelope-container');
const letter = document.getElementById('letter');

seal.addEventListener('click', () => {
  // Cambia sigillo in rottura
  seal.src = 'images/seal-broken.png';

  // Piccolo effetto scala sul click
  seal.style.transform = "translate(-50%, -50%) scale(0.9)";

  // Sparisce la busta
  setTimeout(() => {
    envelopeContainer.classList.add('hide');
  }, 300);

  // Mostra la lettera
  setTimeout(() => {
    letter.classList.add('show');
  }, 800);
});