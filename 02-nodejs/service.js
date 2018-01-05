var data = require('./data/devfest-2015')

// retourne le tableau de tous les présentateurs;

exports.listerTousLesPresentateurs = function(){
	return data.speakers
}

// retourne le tableau de toutes les sessions;
exports.listerToutesLesSessions = function(){
	return data.sessions
}

// retourne la session dont l’identifiant est fourni;
exports.trouverUneSession = function(idSession){
	return data.sessions.filter(session => session.id === idSession)[0]
}

// retourne uniquement les présentateurs qui ont la propriété topspeaker à true.
exports.listerTopPresentateurs = function(){
	return data.speakers.filter(speaker => speaker.topspeaker === true)
}