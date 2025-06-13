const soma = function (a, b) {
  return a + b;
};

console.log(soma(3, 5));

const saudacao = function (nome) {
  if (nome == "Bruno") {
    return "Olá Bruno!";
  }
};

console.log(saudacao("Bruno"));

function multiplicarTresNumeros(a, b, c) {
  return a * b * c;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(7, 3, 4);

console.log("O valor da multiplicação é " + mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

podeDirigir(20, true);