for (let i = 10; i >= 0; i--) {
  if (i % 2 == 1) {
    console.log("Caiu no continue");
    continue;
  }
  console.log(i);
}
