if (1 === 1) {
  console.log("verdadeiro");
} else if (1 !== 2) {
  console.log("falsiane");
}

const minhaVar = "1";

switch (minhaVar) {
  case "1":
    let meuArray = [1, 5, 8];
    for (let i of meuArray) {
      console.log(i);
    }
    break
  
  case 2:
    let seuArray = [1, 5, 8];
    for (let i in meuArray) {
      console.log(i);
    }
    break

  default:
    let outroArray = [0, 2, 3, 0, 5];
    outroArray
      .forEach((elemento) => console.log(elemento));
    
    console.log("noooo");
    
    let meuNovoArray = outroArray.map((elemento) => elemento * 2);
    console.log(meuNovoArray);
}