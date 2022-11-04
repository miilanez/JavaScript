//Exercício criar form com array e obj

function meuEscopo() {
  const form = document.querySelector(".form"); //selecionando elemento form
  const resultado = document.querySelector(".resultado"); //selecionando div resultado

  const pessoas = []; //declarando array para recebimento dos dados inseridos no form

  function recebeEventoForm(evento) {
    evento.preventDefault(); //retirando o comportamento padrão do navegador

    const nome = form.querySelector(".nome"); //selecionando elemento nome do formulario
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm); //capturando evento após uso do elemento submit
}

meuEscopo();
