console.log("*** Utilisation de `let` ***")
let favoriteCityId = "rome"
console.log(favoriteCityId)

favoriteCityId = "paris"
console.log(favoriteCityId)

console.log("\n\n*** Utilisation de `const` ***")
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
// citiesId = []
citiesId.push("tokyo")
console.log(citiesId)

console.log("\n\n*** `Création d’objet` ***")
function getWeather(cityId){
	let city = cityId.toUpperCase()
	let temperature = 20
	
	return {city, temperature}
}

const weather = getWeather("tokyo")
console.log("Object",weather)

console.log("\n\n*** `Affectation destructurée` ***")
 
let {
	city: city1,
	temperature: temperature1
} = weather;

// ou  let {city, temperature} = weather;
console.log(city1)
console.log(temperature1)

console.log("\n\n*** `Rest operator` ***")

let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

console.log("\n\n*** `Classe` ***")

class Trip {
	
	get price(){
		return this._price
	}
	
	set price(newPrice){
		this._price = newPrice
	}
	
	constructor(id, name, imageUrl, price){
		this.id = id
		this.name = name
		this.imageUrl =imageUrl
		this.price = price
	}
	
	toString(){
		return "Trip ["+ this.id +", "+ this.name +", "+this.imageUrl +", "+ this.price +"]"
	}
	
	static getDefaultTrip() {
		return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg", this.price)
	}
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg", 100)
console.log(parisTrip)
console.log(parisTrip.name)

console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())

console.log("\n\n*** `Héritage` ***")

class FreeTrip extends Trip {
	
	get price(){
		return this._price
	}
	
	set price(newPrice){
		this._price = newPrice
	}
	
	constructor(id, name, imageUrl){
		super(id, name, imageUrl, 0)
	}
	
	toString(){
		return "Free" + super.toString()
	}

}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nanges.jpg")
console.log(freeTrip.toString())
