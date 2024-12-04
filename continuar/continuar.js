document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'genero'
    const elementos = document.querySelectorAll('.genero');
    
    // Recupera as preferências salvas do usuário (caso existam)
    const preferenciasSalvas = JSON.parse(localStorage.getItem('preferencias')) || [];
    
    // Marca as imagens que o usuário já selecionou
    elementos.forEach(function(elemento) {
        // Verifica se o id do elemento está nas preferências salvas
        if (preferenciasSalvas.includes(elemento.id)) {
            elemento.classList.add('selecionado'); // Marca como selecionado
        }
        
        // Adiciona o evento de clique
        elemento.addEventListener('click', function() {
            console.log('Elemento clicado!'); // Verifica se o clique foi registrado

            // Verifica se o elemento já tem a classe 'selecionado'
            if (elemento.classList.contains('selecionado')) {
                // Se tem, remove a classe 'selecionado' e adiciona a classe 'genero'
                elemento.classList.remove('selecionado');
                elemento.classList.add('genero');
                
                // Remove a escolha das preferências salvas
                const index = preferenciasSalvas.indexOf(elemento.id);
                if (index > -1) {
                    preferenciasSalvas.splice(index, 1); // Remove o id das preferências
                }
            } else {
                // Se não tem, remove a classe 'genero' e adiciona a classe 'selecionado'
                elemento.classList.remove('genero');
                elemento.classList.add('selecionado');
                
                // Adiciona a escolha às preferências salvas
                preferenciasSalvas.push(elemento.id); // Adiciona o id nas preferências
            }
            
            // Salva as preferências no localStorage
            localStorage.setItem('preferencias', JSON.stringify(preferenciasSalvas));
        });
    });
});

// Verifica as condições ao clicar no botão "Entrar"
document.getElementById('entrarBtn').addEventListener('click', function(event) {
    // Verifique se as preferências estão salvas no localStorage
    const preferenciasSalvas = JSON.parse(localStorage.getItem('preferencias')) || [];

    // Se as preferências estiverem vazias
    if (preferenciasSalvas.length === 0) {
        // Impede a navegação
        event.preventDefault();
        alert('Por favor, escolha ao menos uma categoria.');
    } else {
        // Se as preferências não estiverem vazias, permite a navegação para o destino
        console.log("Preferências válidas, navegação permitida.");
        // Redireciona para a página "../Index/index.html"
        window.location.href = "../Index/index.html";
    }
});
