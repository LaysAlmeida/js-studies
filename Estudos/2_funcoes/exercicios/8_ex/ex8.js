function tamanhoTexto(txt) {
  if (txt.length > 10) {
    return "Texto muito longo.";
  } else if (txt == "") {
    return "Insira um texto aqui.";
  } else {
    return "Texto dentro do limite."
  }
}

console.log(tamanhoTexto("Gracie Abrams"));
console.log(tamanhoTexto("Halsey"));
console.log(tamanhoTexto("Shawn Mendes"));
