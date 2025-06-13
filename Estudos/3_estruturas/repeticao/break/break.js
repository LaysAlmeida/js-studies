for (let i = 1; i < 20; i++) {
  if (i % 10 == 0) {
    console.log("Saiu do loop.");
    break;
  }

  console.log("Prosseguindo o loop...");

  console.log(i);
}

console.log("------------------------------");

let nome = "André";

for (let i = 0; i < 10; i++) {
  console.log(i);

  if (i == 3) {
    nome = "Bruno";
  }

  if (i == 5 && nome == "Bruno") {
    console.log(`Agora é a vez de ${nome}, pode parar.`);
    break;
  }
}
