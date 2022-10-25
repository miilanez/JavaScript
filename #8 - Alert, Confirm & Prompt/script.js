//Alert, Confirm e Prompt

//Alert
alert("Mensagem Personalizada"); 

//Confirm - captura o valor retornado pela mensagem
confirm("Você deseja continuar?");
//cancelar = false / ok = true


//Prompt



//Exercício - Soma de dois números

let primeiroNumero = prompt("Digite o primeiro número:");
let segundoNumero = prompt("Digite o segundo número:");

//transformando string em number através do método parseInt
let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);

alert(`O resultado foi: ${resultado}`);