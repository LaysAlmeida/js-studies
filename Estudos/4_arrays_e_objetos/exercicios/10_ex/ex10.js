// Criar um array a partir de uma frase e imprimir cada palavra do array no console utilizando for
let phrase = ["I don't wanna look at anything else now that I saw you."];

let phraseToString = phrase.toString();

let newPhrase = phraseToString.split(" ");

for (let i = 0; i < newPhrase.length; i++) {
  console.log(newPhrase[i]);
}
