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

