const a = "texto";

let b = 3;
b = 4;

let bool = false;

function minhaFuncao (arg1, arg2) {
  return arg1 + arg2
}

const outraFunc = (arg1, arg2) => {
  return arg1 + arg2;
};

const arrowAlt = (arg1, arg2) => arg1 + arg2;


console.log(minhaFuncao(1, 2));

console.log(outraFunc(3, 4));

console.log(arrowAlt(3, 4));

console.log("texto" + 3)