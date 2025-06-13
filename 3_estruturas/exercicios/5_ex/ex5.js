let velocidade = 80;

if (velocidade > 80) {
  console.log(
    `Você ultrapassou a velocidade máxima permitida de 80km/h e será multado! \nSua velocidade atual é ${velocidade}km/h.`
  );
} else if (velocidade <= 0) {
  console.log("Você está parado, acelere para sair do local.");
} else {
  console.log(
    `Velocidade dentro do limite permitido! \nVelocidade atual: ${velocidade}km/h.`
  );
}
