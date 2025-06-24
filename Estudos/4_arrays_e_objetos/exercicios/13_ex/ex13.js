// Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números. A função deve retornar o maior número presente no array.

function findMaxNumber(arr) {
  //let maxNumber = Math.max.apply(null, arr);
  let maxNumber = Math.max(...arr);
  return maxNumber;
}

console.log(findMaxNumber([4, 5, 6, 7, 0, 190]));