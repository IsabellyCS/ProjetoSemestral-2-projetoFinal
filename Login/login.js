
document.getElementById('loginButton').addEventListener('click', function() {
    // Pegando os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
    } else {
        window.location.href = "../Index/index.html"; 
    }
});