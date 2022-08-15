// template literals é mais uma feature ddo ES6 que nos permite criar strings complexas de forma mais fácil.
//  Você certamente já concatenou strings e variáveis em Javascript da seguinte forma:

// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// Essa solução nada elegante é como fazíamos antes do ES6 introduzir uma nova forma de criar e manipular strings
//  dinamicamente através de template literals. Com o template literals o exemplo acima pode ser substituído por:

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

// Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o
//  operador + e \n para trocar de linha. Execute o código abaixo para ver o resultado!
// Com o template literals // enter apos os itens quebra a linha.
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

let pessoa = {
    nome: 'márcia',
    sobrenome: 'silva',
    anoNascimento: 1988
}

console.log(`Paciente: ${pessoa.nome} ${pessoa.
    sobrenome}
Idade: ${2022 - pessoa.anoNascimento} anos`);