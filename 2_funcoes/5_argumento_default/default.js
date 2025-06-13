function potencia(a, b = 2) {
  return a ** b;
}

console.log(potencia(4, 3));
console.log(potencia(5));
//Se não for passado nenhum valor ao segundo argumento ao chamar a função, então ele tem o 2 como valor default
