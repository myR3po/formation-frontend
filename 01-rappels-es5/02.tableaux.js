villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']

afficheVille = function(ville){
			console.log(ville)
		}

villes.forEach(afficheVille)


lettreADansToutesLesVilles = function(ville){
			return ville.indexOf('a') !== -1
		}

console.log('\nlettreADansToutesLesVilles = ' + villes.every(lettreADansToutesLesVilles))


auMoinsUneVilleAvecUnTiret = villes.some(ville => ville.indexOf('-') !== -1)
console.log('uMoinsUneVilleAvecUnTiret = ' + auMoinsUneVilleAvecUnTiret)

villesSansTiretSansEspace = villes.filter(ville => ville.indexOf('-') === -1 && ville.indexOf(' ') === -1)
console.log('villesSansTiretSansEspace = ', villesSansTiretSansEspace)

villesMajusculeSeTerminantParS = villes.filter(ville => ville.charAt(ville.length - 1) === 's')
				.map(ville => ville.toUpperCase())

console.log('villesMajusculeSeTerminantParS = ', villesMajusculeSeTerminantParS)