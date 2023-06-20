window.addEventListener('load', () => {
  render('load', 'Brown');
});

window.addEventListener('DOMContentLoaded', () => {
  render('DOMContentLoaded', 'black');
});

function render (type, color) {
  console.log(type, new Date().getTime());
  const TARGET = document.createElement('div');
  TARGET.style.width = '15vw';
  TARGET.style.height = '20px';
  TARGET.style.background = color;
  document.body.appendChild(TARGET);
}
