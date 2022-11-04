// Objeto

const pessoa = {
    primeiroNome : 'Gabriel',
    sobrenome: 'Milanez',
    endereço: {
        rua: 'Av. Ulisses Montarroyos',
        num: '2400',
    },

    nomeCompleto : () => {
        return this.primeiroNome + ' ' + this.sobrenome;
    }
};

pessoa.celular = '970707070';

pessoa.enderecoCompleto = () => {
    return `Rua: ${this.endereço.rua}, ${this.endereço.num}.`;
}

function exibeDados(p) {
    alert(`\n
        Nome: ${p.nomeCompleto()}\n
        Endereço: ${p.enderecoCompleto()}\n
        Celular: ${p.celular}
    `);
}

exibeDados(pessoa);