//Math

let num = 9.5486

//arredondando numero para baixo
let num1 = Math.floor(num);
console.log(num1);

//arredondando numero para cima
let num2 = Math.ceil(num);
console.log(num2);

//arredondando numero para diferença mais proxima
let num3 = Math.round(num);
console.log(num3); //10 por passar de 9.5

//captar o maior numero
console.log(Math.max(-60,1,2,3,4,60)); //60

//captar o menor numero
console.log(Math.min(-60,1,2,3,4,60)); //-60

//numero aleatorio
console.log(Math.random())