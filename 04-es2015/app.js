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