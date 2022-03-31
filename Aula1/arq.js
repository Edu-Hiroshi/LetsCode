const funcoes = require('./funcoes');

const meuArray = [1, 2];
const [a, b] = meuArray


const meuObj = {
    d: 1,
    b: 2,
};
const { c, d } = meuObj;


console.log(funcoes.fib());
console.log(funcoes.sum(a, b));