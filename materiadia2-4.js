// Outro método muito útil para se trabalhar com objetos é o Object.entries. Um pouco diferente dos métodos apresentados
//  anteriormente, este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto.
//   Ficou confuso? Não se preocupe, vamos ao nosso exemplo e ver qual seria a saída:
const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]
 
//   Como você pode perceber, ao aplicar o Object.entries no nosso objeto, o retorno foi um array de arrays. 
//   Onde a primeira entrada de cada array é a chave do objeto em formato de string, e, o segundo valor é seu respectivo
//    valor, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo que é um number. 
// -----------------------------------------------------------------------
// object assign
// Esse método é utilizado para copiar os valores de todas ass propriedades de um ou mais objetos para um objeto destino.
//  Sua estrutura é:

 // A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    // Como você pode ver, o método Object.assign adicionou as propriedades de info e de family ao objeto person.
    //  Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info.
    //   Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, 
    //   de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.