//Arrays 

//Criando um array vazio
const cidades = [];
//Imprimindo lista de cidades
console.log(cidades);

//Adicionando cidade ao final do array com método "push"
cidades.push('Recife', 'Petrolina');
console.log(cidades);

//Adicionando cidade no início do array 
cidades.unshift('Caruaru');
console.log(cidades);

//Remover cidade ao final do array
cidades.pop();
//Listar cidade removida através do pop
const cidadeRemovida = cidades.pop();
console.log(cidadeRemovida);
