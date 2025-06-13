function podeEntrarAutoescola(age) {
  if (age >= 18) {
    return "Você pode entrar na autoescola, pois tem a idade adequada";
  } else {
    return `Você não pode entrar na autoescola, pois tem apenas ${age} anos.`;
  }
}

console.log(podeEntrarAutoescola(12));
console.log(podeEntrarAutoescola(19));
console.log(podeEntrarAutoescola(17));
console.log(podeEntrarAutoescola(20));

