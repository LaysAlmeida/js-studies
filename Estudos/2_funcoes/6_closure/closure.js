function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}

let n1 = lembrarSoma(5);
console.log(n1(3));

function multi(x) {
  return (y) => x * y; //Utilizando uma arrow function
}

let mult = multi(8);
console.log(mult(2));

function makeFunc(browserName) {
  function displayName() {
    return browserName;
  }
  return displayName;
}

let myFunc = makeFunc("Mozilla");
console.log(myFunc());

function contador(i) {
  let cont = i;
  let somarContador = function () {
    console.log(cont);
    cont++;
  };
  return somarContador;
}

let meuContador = contador(5);
meuContador(); //5, a cada chamada de função ele acrescenta +1
meuContador(); //6
