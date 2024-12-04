document.getElementById('meuForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    if (email !== confirmEmail) {
        alert('Os e-mails não correspondem');
        return;
    }
    if (senha !== confirmSenha) {
        alert('As senhas não correspondem');
        return;
    }

    window.location.href = '../continuar/continuar.html';


}
)