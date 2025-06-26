const dog = {
  breed: "SRD",
  bark: function () {
    console.log("Au au");
  },
  walk: function () {
    console.log("Toc toc");
  },
  setBreed: function () {
    return this.breed = prompt("Qual é a raça do seu cachorro?");
  },

  getBreed: function () {
    return `A raça é ${this.breed}`;
  },
};

console.log(dog.breed);
console.log(dog.setBreed());
console.log(dog.getBreed());
