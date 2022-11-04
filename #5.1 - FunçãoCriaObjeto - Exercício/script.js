// Objeto

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome, // ou só "nome,"
    sobrenome: sobrenome, // ou só "sobrenome,"
    idade: idade, // ou só "idade,"
  };
}

const pessoa1 = criaPessoa("Gabriel", "Milanez", "25");

console.log(pessoa1);
