let car = {
  portas: 2,
  portaMalas: "200L",
  motor: "2.0",
};

let adicionais = {
    tetoSolar: true,
    arCondicionado: true
}

console.log(car);

Object.assign(car, adicionais);

console.log(car);

