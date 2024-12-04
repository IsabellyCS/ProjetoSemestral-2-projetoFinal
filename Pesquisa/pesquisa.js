
// Abrir o Overlay
document.getElementById("main").onclick = function () {
  document.getElementById("myNav").style.height = "100%"; // Expandir o overlay
}

// Fechar o Overlay
function closeNav() {
  document.getElementById("myNav").style.height = "0%"; // Esconder o overlay
}

// Função para destacar o botão da categoria
function highlightCategoryButton(categoria) {
  const btns = document.querySelectorAll("#Categorias .btn");  // Seleciona todos os botões de categoria

  // Remove a classe 'active' de todos os botões
  btns.forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Adiciona a classe 'active' ao botão correspondente ao gênero
  const selectedBtn = document.querySelector(`#Categorias .btn[data-category="${categoria}"]`);
  if (selectedBtn) {
    selectedBtn.classList.add("active");
  }
}

filterSelection("all")

// Função para pegar o parâmetro da URL
function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Pega o valor da categoria da URL
const categoria = getParameterByName('categoria');

// Se a categoria for válida, chama a função de filtragem com o valor da categoria
if (categoria) {
  filterSelection(categoria);  // Aplica o filtro para a categoria
  highlightCategoryButton(categoria);  // Destaca o botão do gênero
} else {
  filterSelection("all");  // Caso não haja categoria, mostra todos
}
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


  // var btns = btnContainer.getElementsByClassName("btn");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("active");
      
  //       current[0].className = current[0].className.replace(" active", "");
      
  //     this.className += " active";
  //   });
  // }


 // Pega o primeiro elemento com a classe "Categorias"
var btnContainer = document.querySelector(".Categorias"); // Usando querySelector para pegar um único elemento

if (btnContainer) {
  // Pega todos os botões dentro do contêiner
  var btns = btnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
    // Adiciona um evento de clique em cada botão
    btns[i].addEventListener("click", function () {
      // Remove a classe 'active' do botão atualmente ativo
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { // Verifica se existe algum botão com a classe 'active'
        current[0].classList.remove("active");
      }

      // Adiciona a classe 'active' no botão clicado
      this.classList.add("active");
    });
  }
}


// Função para destacar o botão da categoria
function highlightCategoryButton(categoria) {
  const btns = document.querySelectorAll("#Categorias .btn");  // Seleciona todos os botões de categoria

  // Verifica se existem botões
  if (btns.length === 0) {
    return;  // Retorna sem executar o restante do código
  }

  // Remove a classe 'active' de todos os botões
  btns.forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Adiciona a classe 'active' ao botão correspondente ao gênero
  const selectedBtn = document.querySelector(`#Categorias .btn[data-category="${categoria}"]`);
  if (selectedBtn) {
    selectedBtn.classList.add("active");
  } else {
    console.warn(`Botão para a categoria "${categoria}" não encontrado.`);
  }
}

// Função de filtragem dos jogos
function filterSelection(c) {
  var x, i;
  var emptyDiv = document.querySelector(".empty"); // Selecione a div empty

  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";

  let visibleGamesCount = 0; // Contador de jogos visíveis

  // Percorra todos os jogos e conte os que devem ser exibidos
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");

    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], "show");
      visibleGamesCount++; // Incrementa o contador
    }
  }

  // Exibe ou esconde a div empty baseado no número de jogos visíveis
  if (visibleGamesCount % 2 === 1) {  // Se o número de jogos for ímpar
    if (emptyDiv) emptyDiv.style.display = "block"; // Exibe a div empty
  } else {
    if (emptyDiv) emptyDiv.style.display = "none"; // Esconde a div empty
  }
}

// Função para adicionar classes
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Função para remover classes
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Inicialização para exibir todos os jogos
// filterSelection("all");

// Pega o primeiro elemento com a classe "Categorias"
var btnContainer = document.querySelector(".Categorias"); // Usando querySelector para pegar um único elemento

if (btnContainer) {
  // Pega todos os botões dentro do contêiner
  var btns = btnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
    // Adiciona um evento de clique em cada botão
    btns[i].addEventListener("click", function () {
      // Remove a classe 'active' do botão atualmente ativo
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { // Verifica se existe algum botão com a classe 'active'
        current[0].classList.remove("active");
      }

      // Adiciona a classe 'active' no botão clicado
      this.classList.add("active");
    });
  }
}

// Função para verificar se o elemento está visível na tela
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
}

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rolagem suave
  });
}

// Alvo da div
const targetDiv = document.getElementById('targetDiv');

// Função para verificar a visibilidade e aplicar ou remover a classe
function handleScroll() {
  // Verifica se a posição do scroll é maior que 0 (ou seja, não está no topo)
  if (window.scrollY > 0) {
    // Adiciona a classe para mostrar a div com animação
    if (isElementInView(targetDiv)) {
      targetDiv.classList.add('visible');
    } else {
      targetDiv.classList.remove('visible');
    }
  } else {
    // Se a página estiver no topo, você pode executar um comportamento específico
    targetDiv.classList.remove('visible');
  }
}

// Evento de rolagem
window.addEventListener('scroll', handleScroll);

window.addEventListener('DOMContentLoaded', () => {
  handleScroll(); // Garante que a função seja chamada imediatamente após carregar
});