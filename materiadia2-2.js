// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer)

  //Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para 
  //armazenar seu sobrenome. Uma das formas já vistas até então é reescrever o objeto, dessa vez já com a nova propriedade lastName.
  const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);

//   No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir 
//   a sintaxe abaixo:
// objeto.nomeDaPropriedade.
// objeto[variavelQueContemONomeDaPropriedade].

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);

//   crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor.
//    O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const a = {}
let  b = 'Sobrenome'
c = 'silva'
const newObjeto = (a, b, c) => {
 a =`${b} ${c}`; 
}
return

consleg.log(newObjeto(a,b,c))


//mais perdido que cego em tiroteio