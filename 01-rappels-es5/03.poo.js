function Personne(nom, prenom, pseudo){
	self = this
	self.nom = nom
	self.prenom = prenom
	self.pseudo = pseudo
	
	this.getNomComplet = function(){
		return this.nom + " " + this.prenom + " [ " + this.pseudo + " ]"
	}
	
	this.getInitiales = function(){
		return nom.charAt(0).toUpperCase() + " " + prenom.charAt(0).toUpperCase()
	}
}

afficherPersonne = function(personne){
	console.log('Le nom : ' + personne.nom)
	console.log('Le prenom : ' + personne.prenom)
	console.log('Le pseudo : ' + personne.pseudo)
	console.log('Le nom complet : ' + personne.getNomComplet())
	console.log('\n')
}

jules = new Personne("LEMAIRE", "Jules", "jules77")
afficherPersonne(jules)

paul = new Personne("LEMAIRE", "Paul", "paul44")
afficherPersonne(paul)

jules.pseudo = "jules44"
afficherPersonne(jules)

console.log(jules.age)
Personne.prototype.age = "NON RENSEIGNE"
console.log(jules.age)
jules.age = 30
console.log(jules.age)

console.log(jules.getInitiales(), '\n')

robert = {
	prenom : "Robert",
	nom : "LEPREFET", 
	pseudo : "robert77", 
	getNomComplet : function(){
		return this.nom + " " + this.prenom + " [ " + this.pseudo + " ]"
	}
}

afficherPersonne(robert)