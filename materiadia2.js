// 1)

//const sum = (value1, value2) => value1 + value2;
// console.log(sum(2,2))
// console.log(sum(2,'2'))
// 2)
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));


//   Na prática, a função sum está retornando uma string, e essa não é o objetivo de
//   uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.
//   Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção,
//    que vai interromper o funcionamento do código. Essa é a função do throw:
//3)
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));
// 4)Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código
// ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo.
// É aí que entra o bloco try/catch. Enquanto o try tenta executar o código com sucesso, o catch é 
// chamado caso ocorra um erro.Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum 
// para que ela não tenha funcionalidades demais.

  const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, 5));
  console.log(sum(2,'5'))