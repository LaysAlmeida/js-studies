const car = {
	"brand": "BMW",
	"wheels": 4,
	"doors": 2,
	"type": "Sedan",
    "sunroof": true,
    "recommendedSalesPrice": ["$40000", "$45000"]
}

let carToString = JSON.stringify(car);

console.log(carToString);
//console.log(carToString.brand); //undefined, pois agora virou uma string e não tem essa propriedade

let carToJSON = JSON.parse(carToString);

console.log(carToJSON);
console.log(carToJSON.brand); //BMW
console.log(carToJSON.recommendedSalesPrice[0]); //$40000
