// function objetoPessoa(nome, idade) {
//     return {
//         nome: nome;
//         idade: idade;
//     }
// }


const objetoPessoa = (nome, idade) => ({nome:nome, idade:idade});

console.log(objetoPessoa('joaquim', 25))

// function contaPalavras(frase) {
//     return frase.split(' ').length;
// }


const contaPalavras = (frase) => frase.split(' ').length
console.log(contaPalavras('fala tribo, blz?'))


// function soma(a, b) {
//     return a + b;
// }


const soma = (a, b) => a + b
console.log(soma(2,2))