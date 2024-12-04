// Abrir o Overlay
document.getElementById("main").onclick = function() {
  document.getElementById("myNav").style.height = "100%"; // Expandir o overlay
}

// Fechar o Overlay
function closeNav() {
  document.getElementById("myNav").style.height = "0%"; // Esconder o overlay
}

function trocarImagem(src) {
    document.getElementById('imagem-grande').src = src;
}


