function trocaCores() {
    const selecao = document.querySelector('#corBackground');
    const cor = selecao.options[selecao.selectedIndex].value;
    document.body.style.background = cor;
}