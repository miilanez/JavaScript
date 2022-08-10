//Apresenta uma mensagem e esconde o formulário de LogIn após o submit;
function bemVindo() {
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem vindo!`);
    document.getElementById('formularioLogin').style.display = 'none';
}