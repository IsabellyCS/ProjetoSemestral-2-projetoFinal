// Abrir o Overlay
document.getElementById("main").onclick = function() {
  document.getElementById("myNav").style.height = "100%"; // Expandir o overlay
}

// Fechar o Overlay
function closeNav() {
  document.getElementById("myNav").style.height = "0%"; // Esconder o overlay
}


// Pausar a animação ao passar o mouse sobre o carrossel
document.querySelector('.gallery-container').addEventListener('mouseover', () => {
    document.querySelector('.gallery').style.animationPlayState = 'paused';
});
  
// Continuar a animação ao sair com o mouse
document.querySelector('.gallery-container').addEventListener('mouseleave', () => {
    document.querySelector('.gallery').style.animationPlayState = 'running';
});

// Clonando os itens da galeria para criar o efeito de loop
document.addEventListener('DOMContentLoaded', function () {
    let isDown = false;
    let startX;
    let scrollLeft;

    //codigo diferente
    let elemScroll = document.querySelector(".gallery-container");
let elemContainer = elemScroll.querySelector(".gallery");
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach((item) => {
  let elemDuplicado = item.cloneNode(true);
  elemDuplicado.setAttribute("aria-hidden", true);
  elemContainer.appendChild(elemDuplicado);
});

    // Função de scroll para a seta esquerda
    function scrollEsquerda(button) {
        const fileira = button.closest('.carrossel-container').querySelector('.fileira');
        fileira.scrollBy({
            left: -1120,
            behavior: 'smooth'
        });
    }

    // Função de scroll para a seta direita
    function scrollDireita(button) {
        const fileira = button.closest('.carrossel-container').querySelector('.fileira');
        fileira.scrollBy({
            left: 1120,
            behavior: 'smooth'
        });
    }

    // Scroll ao arrastar (aplicando para todas as fileiras)
    document.querySelectorAll('.fileira').forEach((fileira) => {
        fileira.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - fileira.offsetLeft;
            scrollLeft = fileira.scrollLeft;
        });

        fileira.addEventListener('mouseleave', () => {
            isDown = false;
        });

        fileira.addEventListener('mouseup', () => {
            isDown = false;
        });

        fileira.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - fileira.offsetLeft;
            const walk = (x - startX) * 2; // Ajuste a velocidade conforme necessário
            fileira.scrollLeft = scrollLeft - walk;
        });
    });

    // Expondo as funções globalmente para os botões de seta
    window.scrollEsquerda = scrollEsquerda;
    window.scrollDireita = scrollDireita;

    // Clonando os itens da galeria
    const gallery = document.querySelector('.gallery');
    const items = gallery.querySelectorAll('.gallery-item');

    // Clonando todos os itens e adicionando ao final
    items.forEach(item => {
        const clone = item.cloneNode(true);
        gallery.appendChild(clone);
    });
});


//rolando

function scrollToSteam() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("steam");
    const posicao = elemento.offsetTop; // Posição do topo da seção


    window.scrollTo({
      top: posicao - 140, 
      behavior: "smooth" 
    });
  }

  function scrollToConsole() {

    const elemento = document.getElementById("console");
    const posicao = elemento.offsetTop;


    window.scrollTo({
      top: posicao - 140, 
      behavior: "smooth" 
    });
  }

  function scrollToEpic() {

    const elemento = document.getElementById("epic");
    const posicao = elemento.offsetTop;


    window.scrollTo({
      top: posicao - 140, 
      behavior: "smooth" 
    });
  }

  function scrollToPC() {

    const elemento = document.getElementById("pc");
    const posicao = elemento.offsetTop; 

    window.scrollTo({
      top: posicao - 140,
      behavior: "smooth"
    });
  }

  function scrollToConsole() {

    const elemento = document.getElementById("console");
    const posicao = elemento.offsetTop; 


    window.scrollTo({
      top: posicao - 140, 
      behavior: "smooth"  
    });
  }

  function scrollToMobile() {

    const elemento = document.getElementById("mobile");
    const posicao = elemento.offsetTop; 

    window.scrollTo({
      top: posicao - 140,
      behavior: "smooth"
    });
  }

  function scrollToLancamento() {

    const elemento = document.getElementById("lancamento");
    const posicao = elemento.offsetTop;


    window.scrollTo({
      top: posicao - 140,
      behavior: "smooth"
    });
  }

  function scrollToIndie() {
    const elemento = document.getElementById("indie");
    const posicao = elemento.offsetTop; 


    window.scrollTo({
      top: posicao - 140, 
      behavior: "smooth" 
    });
  }

  function scrollToTop() {
    // Calcula a posição do topo da seção
    const elemento = document.getElementById("top");
    const posicao = elemento.offsetTop; // Posição do topo da seção


    window.scrollTo({
      top: posicao - 140, 
      behavior: "smooth" 
    });
  }


  //div final
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



