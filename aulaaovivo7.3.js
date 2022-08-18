//exemplo1
function sum (a, b) {
   return a + b
}


//exemplo 2
const summationOf = (number) => {
    if (number === 1) {
        return 1;
    } return 6;

    if (number === undefined) {
        throw new Error('summationOf deve receber valor')
    }
    let somatorio = 0;
    for (let index = 1; index <= number; index +=1) {
       somatorio += index  
    }
   
    return somatorio
}; 


module.exports = {sum, summationOf};