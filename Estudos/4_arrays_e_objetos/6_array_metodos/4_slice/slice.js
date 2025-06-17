let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.slice(0, 3)); // [0, 1, 2]
console.log(nums.slice(1, 9)); // VAI DE 1 ATÉ 8
console.log(nums.slice(-2)); // Vai de 8 até 9
console.log(nums.slice(3, -2)); // Vai do índice 3, mas removendo os dois últimos índices, pois passou um parâmetro negativo
