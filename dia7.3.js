//Primeiros passos em jest
//Testes unitarios
//Confiança: O sistema é resistente a falhas durante a execução, isto é, não entra em loop, não interrompe a execução 
//por falta de recursos.
//Funcionalidade: O sistema se comporta conforme o que foi definido em seus requisitos.
//Performance: O sistema tem um tempo de resposta adequado e aceitável, mesmo quando submetido a um volume
// de processamento próximo de situações reais ou de pico.

// Com essa provocação, introduziremos você aos testes unitários, que tem a função de validar o comportamento do nosso código
//  de forma sólida e precisa. Testes unitários são porções de código responsáveis por validar o comportamento de unidades 
//  funcionais de código.

// entende-se como unidade funcional qualquer porção de código que, através de algum estímulo, seja capaz de gerar um
//  comportamento esperado. Isso inclui funções, propriedades, construtores... tudo que, de alguma maneira, processe um comportamento 
//  de valor e que você deseja garantir que, apesar das alterações em nível de código, o comportamento siga sendo o mesmo
// TDD - Test Driven Development e cada etapa desse CICLO:

// 1-Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal,
//  a sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar
//   se a função que você irá criar existe.
// 2-Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar
//  o teste.
// 3-Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que você tem um teste
//  já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
// 4-Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas
//  ass funcionalidades da sua função sejam implementadas.
// funções puras? São funções cujo resultado é determinado puramente pelos argumentos passados a elas, ou seja, o retorno é sempre 
//  previsível.Por exemplo, uma função que retorna o dobro do valor recebido como argumento. Então, sempre que o argumento for 2, o valor
// de  retorno será 4.
// Dessa forma se a função acessa ou modifica qualquer coisa que não tenha sido passada como parâmetro a ela, é então uma função impura.

// var count = 0;

// function increaseCount(val) {
//     count += val;
// }

// function getSomething() {
//     return count > 0;
// }

//ambas function impura pois interagem diretamente com a var fora do seu escopo

//assert é uma expressão boleana sempre true a menos q haja uma falha
//const assert = require('assert'); // Sintaxe para incluir o módulo assert

//assert.strictEqual(50, 50); // Sem erros: 50 === 50
//assert.strictEqual(50, 70); // AssertionError: 50 !== 70

//Expect e matchers jest

expect(5).toBe("5")

// toEqual difere de toBE:
//atribuição occorre por valor nos tipos primitivos

let gemeoUm = "Cabelo comprido";
let gemeoDois = gemeoUm;

gemeoUm = "Careca";

console.log(gemeoUm); // Careca
console.log(gemeoDois); // Cabelo comprido

//atribuição por referencia em objetos:
//, ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele.

//Eles são mutáveis, por tanto podemos considerar que é uma forma de criar um apelido (alias) para o original,
// ou seja, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível 
//criar um clone seu. Veja este exemplo:

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol


// Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes no JavaScript.
//  Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do 
//  objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para 
//  a necessidade dos testes:
test('array and object equality', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });