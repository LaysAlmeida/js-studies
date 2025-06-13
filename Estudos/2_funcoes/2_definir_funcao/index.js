//Funcao sem argumentos
function imprimirNoConsole() {
  console.log("Hello World!");
}

imprimirNoConsole();

//Funcao com argumentos
function imprimirUmNum(num) {
  console.log(`O número é ${num}.`);
}

imprimirUmNum(8);

//Funcao anônima atrelada a uma constante
const numeroAleatorio = function () {
  console.log(Math.random());
};

numeroAleatorio();