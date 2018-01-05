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

console.log("\n\n*** `Promise, Set, Map, Arrow Function` ***")

class TripService {
	constructor() {
		this.tripSet = new Set();
		this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
		this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
		this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
	}
	
	findByName(tripName) {

		return new Promise((resolve, reject) => {
			
			setTimeout(() => {
				let trip = Array.from(this.tripSet).filter(t => t.name === tripName)
				if (trip.length === 1) {
					resolve(trip[0])
				} else {
					reject('No trip with name : '+ tripName);
				}
			}, 200)
		})
		
	}
}
class PriceService {
	constructor() {
		this.priceMap = new Map()
		this.priceMap.set('paris', 100)
		this.priceMap.set('rio-de-janeiro', 800)
		this.priceMap.set('nantes')
	}
	
	findPriceByTripId(tripId) {
		
		return new Promise((resolve, reject) => {
			
			setTimeout(() => {
				let price = this.priceMap.get(tripId)
				if (price) {
					resolve(price)
				} else {
					reject('No price found for id : '+ tripId)
				}
			}, 200)
		})
	}
}

const tripService = new TripService()
const priceService = new PriceService()

const handlePromiseTripSuccess = function(trip) {
		console.log("Trip found : ", trip.toString())
	}

const handlePromiseError = function (erreur) {
		console.log(erreur)
	}
	
const handlePromisePriceSuccess = function(price) {
		console.log("Price found : ", price)
	}

tripService.findByName('Paris').then(handlePromiseTripSuccess, handlePromiseError)

tripService.findByName('Toulouse').then(handlePromiseTripSuccess, handlePromiseError)


tripService.findByName('Rio de Janeiro')
	.then(trip => priceService.findPriceByTripId(trip.id))
	.then(price => handlePromisePriceSuccess(price))
	.catch(function(error){
		console.log(error)
	});
	
tripService.findByName('Nantes')
	.then(trip => priceService.findPriceByTripId(trip.id))
	.then(price => handlePromisePriceSuccess(price))
	.catch(handlePromiseError);
