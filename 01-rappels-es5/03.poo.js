function Personne(nom, prenom, pseudo){
	self = this
	self.nom = nom
	self.prenom = prenom
	self.pseudo = pseudo
	
	this.getNomComplet = function(){
		return self.nom + " " + self.prenom + " " + self.pseudo
	}
}

afficherPersonne = function(personne){
	console.log('Le nom : ' + personne.nom)
	console.log('Le prenom : ' + personne.prenom)
	console.log('Le pseudo : ' + personne.pseudo)
	console.log('\n')
}

jules = new Personne("LEMAIRE", "Jules", "jules77")
afficherPersonne(jules)

paul = new Personne("LEMAIRE", "Paul", "paul44")
afficherPersonne(paul)

jules.pseudo = "jules44"
afficherPersonne(jules)