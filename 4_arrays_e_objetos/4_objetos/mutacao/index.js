let pessoa = {
  nome: "Matheus",
};

let pessoa3 = {
  nome: "Matheus",
};

let pessoa2 = pessoa;

console.log(pessoa == pessoa2); //true
console.log(pessoa == pessoa3); //false, pois apesar de terem o mesmo valor, não estão referenciados

pessoa2.nome = "Pedro";

console.log(pessoa.nome); //"Pedro"

pessoa.nome = "Maria";

console.log(pessoa2.nome); //"Maria"
