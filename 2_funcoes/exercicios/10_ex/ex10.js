// function imprimeNumerosPares(num) {
//   for (let i = num; i > 0; i--) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
// }

// imprimeNumerosPares(10);

function isPalindrome (nome) {
    
    let nomeInvertido = "";
    
    for (let i = nome.length - 1; i >= 0; i --) {
        
        nomeInvertido += nome[i];
        console.log(nomeInvertido);
    }
    
    if (nome === nomeInvertido) {
           console.log(true);
        } else {
            console.log(false);
        }
}

isPalindrome('radar');
isPalindrome('hello');