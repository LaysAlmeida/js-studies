let velocidade = 10;

if (velocidade <= 0 || velocidade == undefined) {
  console.log(`Seu carro está parado.`);
} else if (velocidade > 80) {
  console.log(
    `Você foi multado! \nA velocidade máxima é de 80km/h e você está a ${velocidade}km/h.`
  );
} else {
  console.log(
    `Sua velocidade é de ${velocidade}km/h e está dentro do esperado, continue assim.`
  );
}
