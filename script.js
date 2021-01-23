var scoreJoueur = 0;
var scoreCpu = 0;

/* fonction qui recoit le choix, tire au sort le sort et affiche le resultat et le score */
function input(choix) {

	var textArray = [
		'feuille',
		'pierre',
		'ciseaux',
	];
	// simulation du tirage du CPU
	var randomNumber = Math.floor(Math.random()*textArray.length);
	
	var choixCpu = textArray[randomNumber];
		
	var result = quiGagne(choix, choixCpu);

	document.getElementById("result").innerHTML = choix + " contre " + choixCpu + " = " + result;
	document.getElementById("scoreJoueur").innerHTML = scoreJoueur;
	document.getElementById("scoreCpu").innerHTML = scoreCpu;  
}

/* compare les choix et retourne le resultat */
function quiGagne(choixJoueur, choixCpu) {
	
	var ret = "";
	
	if (choixJoueur === choixCpu) {
		ret = "Egalit&eacute; !";
	} 
	else if ( 
		(choixJoueur === 'pierre' && choixCpu === 'ciseaux') || 
		(choixJoueur === 'feuille' && choixCpu === 'pierre') || 
		(choixJoueur === 'ciseaux' && choixCpu === 'feuille') ) {
			
		ret = "Gagn&eacute; !";
		scoreJoueur += 1;
	}
	else {
		ret = "Perdu !";
		scoreCpu += 1;
	}
	
	return ret;	
}

function resetScore() {
	
	scoreJoueur = 0;
	scoreCpu = 0;
	
	document.getElementById("result").innerHTML = "";
	document.getElementById("scoreJoueur").innerHTML = scoreJoueur;
	document.getElementById("scoreCpu").innerHTML = scoreCpu;  	
}