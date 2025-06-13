let a = 10; // Escopo global

function multiplicar(x, y) {
  let a = x * y;

  if (a > 10) {
    let a = 0;
    a++;
    console.log("Escopo do if: " + a); //Escopo do if -> o output é 1
  }

  console.log("Escopo da função: " + a); // Escopo da função -> o output vai ser 21
}

console.log("Escopo global: " + a); // Escopo global -> o output vai ser 10

multiplicar(3, 7);
