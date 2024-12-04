// Script para controlar a abertura da sobreposição
document.getElementById("btn-abrir-overlay").addEventListener("click", function() {
    // Exibe a div overlay
    document.getElementById("overlay").style.display = "flex";
});

// Script para fechar a sobreposição ao clicar no botão "Fechar"
document.getElementById("btn-fechar-overlay").addEventListener("click", function() {
    // Oculta a div overlay
    document.getElementById("overlay").style.display = "none";
});

