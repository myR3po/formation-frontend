const service = require('./service')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'YOUR CHOICE> '
})

function listerTousLesPresentateurs() {
	console.log("\n")
	service.listerTousLesPresentateurs().forEach(p => console.log(p.firstname +" "+ p.lastname))
}

function listerTopPresentateurs() {
	console.log("\n")
	service.listerTopPresentateurs().forEach(p => console.log(p.firstname +" "+ p.lastname))
}

function listerToutesLesSessions() {
	console.log("\n")
	service.listerToutesLesSessions().forEach(s => console.log(s.title))
}

function afficherUneSession(idSession) {
	let s = service.trouverUneSession(idSession)
	if(s){
		console.log("\n")
		console.log(s.desc)
		console.log(s.speakers)
	}else{
		console.log('session not found :`' + answer.trim() + '`');
	}
}

const options = [
	{ id:1, libelle: 'Liste de tous les présentateurs', action: listerTousLesPresentateurs },
	{ id:2, libelle: 'Top présentateurs', action: listerTopPresentateurs},
	{ id:3, libelle: 'Liste des sessions', action: listerToutesLesSessions },
	{ id:4, libelle: 'Détail d\'une session', action: afficherUneSession },
]

const menu = function(){
	console.log("\n*** Application Conférence ***")
	options.forEach(option => console.log(option.id + '. ' + option.libelle))
	rl.prompt();
}


(function(){
	menu()
	rl.on('line', function(line) {
		choice = line.trim()
		let option = options.filter(op => op.id == choice)[0]
		if(option){
			if(option.id == 4){
				rl.question("id de la session> ", (answer) => {
					option.action(answer.trim())
					menu()
				})
			}else{
				option.action()
				menu()
			}
		}
	}).on('close', function() {
	  console.log("\n\nAu revoir ('_') !!!");
	  process.exit(0);
	})
})()
