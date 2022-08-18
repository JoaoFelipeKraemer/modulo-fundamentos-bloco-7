const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'Um título qualquer',
}
quadrinho1.author = 'Don Rosa';
quadrinho1['publishingCompany'] = 'Editora Abril'

// console.log(quadrinho1)
// console.log(quadrinho1.collection);

// Colocar as chaves do objeto em uma array
// let myArray = [];
// for (let key in quadrinho1) {
//     myArray.push(key);
// }
// console.log(myArray);

// console.log(Object.keys(quadrinho1));

// console.log(Object.keys(quadrinho1).includes('author')); ex: preencher formulário com itens n obrigatórios
// console.log(Object.keys(quadrinho1).includes('Numberofpges'));

//Colocar os valroes do objeto em um array
// console.log(Object.values(quadrinho1));
// console.log(Object.values(quadrinho1).includes('Tio Patinhas'));
// console.log(Object.keys(quadrinho1).includes('Pato donald'));

//Colocar as entradas do objeto em um array
// console.log(Object.entries(quadrinho1));

//Typeof
console.log(typeof quadrinho1);
console.log(typeof Object.keys(quadrinho1));


console.log(Array.isArray(Object.keys(quadrinho1)));

const quadrinho2 = {
    collection: 'Sherlock',
    title: 'Qualquer título',
}

const objectAuthor = {
    author: 'Nome do autor',
}

//Copiar as entradas de um objeto para outro
// Object.assign('DESTINO', 'Objeto com entradas a serem copiadas');
// Object.assign(quadrinho2, objectAuthor);
// console.log(quadrinho2);
// console.log(objectAuthor)

//Criação de objetos
const clodeDeQuadrinho2 = Object.assign({}, quadrinho2, objectAuthor)
console.log(clodeDeQuadrinho2)
console.log(quadrinho2)