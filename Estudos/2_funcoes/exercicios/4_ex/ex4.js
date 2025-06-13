function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1;
  //É preciso multiplicar pelo num para que o numero va de 0 até num
  // usando o math.floor() o numero arredonda para baixo entao se num for 5
  // ele vai de 0 - 4.99 e arredondando é de 0 - 4, adicionando +1 ele vai ate 5 
}

console.log(numeroAleatorio(90))
