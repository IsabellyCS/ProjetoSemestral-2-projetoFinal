// Abrir o Overlay
document.getElementById("main").onclick = function() {
  document.getElementById("myNav").style.height = "100%"; // Expandir o overlay
}

// Fechar o Overlay
function closeNav() {
  document.getElementById("myNav").style.height = "0%"; // Esconder o overlay
}

// Função para verificar se o elemento está visível na tela
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}

// Alvo da div
const targetDiv = document.getElementById('targetDiv');

// Função para verificar a visibilidade e aplicar ou remover a classe
function handleScroll() {
  if (isElementInView(targetDiv)) {
      targetDiv.classList.add('visible'); // Adiciona a classe para mostrar a div com animação
  } else {
      targetDiv.classList.remove('visible'); // Remove a classe para esconder a div quando não estiver visível
  }
}

// Evento de rolagem
window.addEventListener('scroll', handleScroll);

// Chama a função ao carregar a página para garantir que a div apareça se já estiver visível
window.addEventListener('load', handleScroll);

// Função para rolar até o topo
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
  });
}