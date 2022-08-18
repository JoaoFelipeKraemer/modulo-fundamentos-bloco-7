
const {sum, summationOf} = require('./aulaaovivo7.3')
//test('txto qualquer', () => {})
describe('testando função soma', () => {

})
test('adiciona 1 + 2 igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
})



//exemplo2
describe('Testando função', () => {
test('ESPERA Q A FUNÇAO EXISTA', () => {
    expect(typeof summationOf).toBe('function');
});

test('espera q passando valor 1 retorne 1',() => {
    expect(summationOf(1)).toBe(1);
})

test('espera 3 retorne 6'), () => {
    expect(summationOf(3)).toBe(6);
}
test('lança erro quando nenhum parametro é passado',() => {
    expect(() => summationOf()).toBe('summationOf deve receber valor');
})


})


