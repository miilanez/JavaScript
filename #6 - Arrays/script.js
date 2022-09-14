//Arrays 

//Listando cidades em um array
const cidades = ['Recife, Jaboatão dos Guararapes, Olinda, Paulista'];
//Imprimindo lista de cidades
console.log(cidades);

// Mudando caracter de separação de um array
const separacao = cidades.split(',');
//Criando função que substitui "," por "|"
const mudaCaracter = separacao.join('|');
console.log(mudaCaracter);

//Array de objetos com mais de uma característica
const jogadores = [
    {
        nome: 'Carlinhos Bala',
        posição: 'Atacante'
    },
    {
        nome: 'Zada',
        posição: 'Meio Campista'
    }
];
//listando array jogadores
console.log(jogadores);

// Função "Split" - Dividir Array
const email = 'gabrielmilanez@meuemail.com';
// Criando função Split para realizar a divisão no caracter "@"
const emailArray = email.split('@');
console.log(emailArray);
