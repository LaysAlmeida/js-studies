let idade = 18;
let temCNH = false;

if (idade >= 18 && temCNH) {
  console.log("Você pode dirigir.");
} else if (idade >= 18 && !temCNH) {
  console.log("Você tem idade para dirigir, mas não possui CNH.");
} else {
  console.log("Você não pode dirigir.");
}
