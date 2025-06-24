function verificaNumElementos(arr) {
  if (arr.length >= 5) {
    console.log("Muitos Elementos");
  } else {
    console.log("Poucos Elementos");
  }
}

verificaNumElementos([2, 4, 5, 6, 7, 9, 10]);
verificaNumElementos([2, 4, 5, 10, 12]);
verificaNumElementos([2, 4, 5, 10]);