function calcularExpoente(base, potencia) {
  return base ** potencia;
}

console.log(calcularExpoente(2, 4));
console.log(calcularExpoente(3, 5));
console.log(calcularExpoente(4, 6));
console.log(calcularExpoente(5, 7));

console.log("Agora usando Math.pow():");

//outra forma de calcular usando Math.pow()
function calcularExpoente2(base, potencia) {
  return Math.pow(base, potencia);
}

console.log(calcularExpoente(4, 2));
console.log(calcularExpoente(4, 3));
