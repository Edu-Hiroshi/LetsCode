const obj = {
  nome: "duilio",
  idade: 28,
};

obj.animal = "cat";
obj.idade = 29;
console.log(obj);


obj.animal = undefined;
console.log(obj);


delete obj.animal;
console.log(obj);

