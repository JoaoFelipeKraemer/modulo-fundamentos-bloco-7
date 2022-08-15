//Como você já sabe, objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. Dê uma
//olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:
// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

// for in realiza o descrito na linha 1 e 2
//   for (const property in coolestTvShow) {
//     console.log(property);
//   }

//porém Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array.
// console.log(Object.keys(coolestTvShow));


//Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato 
// "Nome da habilidade, Nível: valor da chave referente à habilidade"
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);
  //Verifique que usamos o método Object.keys e a estrutura de repetição for...in em conjunto. Além disso, perceba que a mesma 
 //função é utilizada para iterar sobre os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.

 //O Object.values segue a mesma lógica que o Object.keys, a diferença está em que ele lista os valores de cada chave. 
 //Voltando ao nosso exemplo anterior, como faríamos para listar os valores de cada chave do nosso objeto 
 //coolestTvShow? Utilizando o for...in seria algo como:
//  const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
//   }
  
//retorno
  // BoJack Horseman
  // adult animation
  // Raphael Bob-Waksberg
  // Princess Carolyn
  // Princess Carolyn always lands on her feet.
  // 6

//   utilizando Object.values:
const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  // for (const property in coolestTvShow) {
  //   console.log(coolestTvShow[property]);
  // }
  
//   console.log(Object.values(coolestTvShow));
  //retorno
  // [
  //   'BoJack Horseman',
  //   'adult animation',
  //   'Raphael Bob-Waksberg',
  //   'Princess Carolyn',
  //   'Princess Carolyn always lands on her feet.'
  //    6
  // ]

  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));
