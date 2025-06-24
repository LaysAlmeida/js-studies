function sumUniqueNumbers(arr) {
    let sumArr = 0;
    let count = []; // array auxiliar para contar ocorrências

    // Inicializar contadores
    for (let i = 0; i < arr.length; i++) {
        count[i] = 0;
    }

    // Contar ocorrências usando apenas for
    for (let i = 0; i < arr.length; i++) {
        let isCounted = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count[i]++;
            }
        }
    }

    // Somar os que aparecem só uma vez
    for (let i = 0; i < arr.length; i++) {
        let occur = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                occur++;
            }
        }
        if (occur === 1) {
            sumArr += arr[i];
        }
    }

    return sumArr;
}

console.log(sumUniqueNumbers([2, 1, 1, 1]));
console.log(sumUniqueNumbers([2, 3, -2, 3, 4]));
