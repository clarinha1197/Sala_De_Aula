// Função para exibir o conteúdo dos slides ao clicar neles
function showSlide(slideNumber) {
  const slideViewer = document.getElementById('slide-viewer');
  slideViewer.innerHTML = `<p>Você está visualizando o conteúdo do slide ${slideNumber}.</p>`;
}

// Função para exibir uma mensagem ao clicar nos botões do menu
function menuAction(action) {
  alert(`Você clicou no menu: ${action}`);
}

// Função para logout
function logout() {
  alert("Você saiu da aplicação.");
}
