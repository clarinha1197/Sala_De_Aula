let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Exibir o slide atual
function showSlide(index) {
  // Esconder todos os slides
  slides.forEach(slide => slide.style.display = 'none');
  
  // Mostrar o slide selecionado
  slides[index].style.display = 'block';
}

// Mudar o slide
function changeSlide(direction) {
  currentSlide += direction;
  
  // Verificar se a navegação está dentro do intervalo válido
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Voltar para o último slide
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; // Voltar para o primeiro slide
  }
  
  // Mostrar o slide correspondente
  showSlide(currentSlide);
}

// Inicializar a exibição
showSlide(currentSlide);
