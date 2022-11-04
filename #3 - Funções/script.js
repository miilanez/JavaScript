//função - function

//declaração da função
function exibirMensagem(primeiroNome, ultimoNome) { //parâmetros/variáveis
    alert (`Olá ${primeiroNome} ${ultimoNome}, seja bem vindo(a)!`);
}

//chamada ou invocação da função
exibirMensagem('Gabriel', "Milanez"); //parâmetros inseridos

//Outra forma

function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao("Gabriel");
console.log(variavel);

// Exemplo com uso "externo"

function soma(x=1, y=2) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma (4, 2);
console.log(resultado);

// Exibindo Raiz quadrada = variável recebendo função(arrow)

const raizQuadrada = (numero) => {   //arrow function, substitui function
    return numero ** 0.5;
};

console.log(raizQuadrada(9)); //9 numero escolhido para demonstração