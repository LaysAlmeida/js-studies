let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;

function imprimirNumeros (...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num2, num5);
imprimirNumeros(num, num2, num5, num3, num4);
imprimirNumeros(2, 4, 5, 6, 7, 8, 2, 4, 6, 23);