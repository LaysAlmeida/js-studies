let num = 4;
let qtdDivisores = 0;

for (let divisor = 1; divisor <= num; divisor++) {
  if (num % divisor == 0) {
    qtdDivisores++;
  }
}

if (qtdDivisores > 2) {
  console.log(`${num} não é primo e tem ${qtdDivisores} divisores.`);
} else {
  console.log(`${num} é primo.`);
}


