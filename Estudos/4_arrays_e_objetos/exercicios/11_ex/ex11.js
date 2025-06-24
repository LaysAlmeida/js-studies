//Criar um objeto calculadora; com os métodos somar, subtrair, multiplicar e dividir; cada metodo com 2 parametros, imprimir o valor dos metodos

let calculadora = {
  somar: (a, b) => {
    return a + b;
  },
  subtrair: (a, b) => {
    return a - b;
  },
  multiplicar: (a, b) => {
    return a * b;
  },
  dividir: (a, b) => {
    return a / b;
  },
};

console.log(calculadora.somar(6, 2));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicar(40, 2));
console.log(calculadora.dividir(16, 4));
