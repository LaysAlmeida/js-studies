//Salva os numeros impares e impares de um array em outros diferentes
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let semPares = [];
let comPares = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    semPares.push(arr[i]);
  } else {
    comPares.push(arr[i]);
  }
}
console.log(semPares);
console.log(comPares);
