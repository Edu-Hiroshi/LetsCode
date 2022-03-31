const fib = (nCasas) => {
  let arg1 = 0;
  let arg2 = 1;
  let cont = 0;
  let arg = 0;

  if (nCasas == 0) {
    console.log("entrada incorreta");
  }

  else if (nCasas == 1) {
    console.log(1);
  }

  else {
    while (cont < nCasas) {
      console.log(arg1);
      arg = arg1 + arg2;
      arg1 = arg2;
      arg2 = arg;
      cont = cont + 1;
    }
  }
}

fib(5)