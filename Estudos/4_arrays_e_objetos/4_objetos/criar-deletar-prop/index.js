let person = {
  name: "Bruno",
  age: 20,
  occupation: "RPA",
};

console.log(person.name);

delete person.name;

person.name = "Nuno";
console.log(person);
